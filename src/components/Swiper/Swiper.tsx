import React, { Component, RefObject } from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Button from '@components/Button';
import styles from './Swiper.styles';
import { SwiperProps, SwiperState, Internals } from './Swiper.types';
import { DEFAULT_PROPS } from './Swiper.config';

const { width, height } = Dimensions.get('window');

class Swiper extends Component<SwiperProps, SwiperState> {
  static defaultProps = DEFAULT_PROPS;

  private scrollView: RefObject<ScrollView> = React.createRef();

  internals: Internals = {
    isScrolling: false,
    offset: width * (this.props.index || 0),
  };

  constructor(props: SwiperProps) {
    super(props);
    this.state = this.initState(props);
  }

  initState(props: SwiperProps): SwiperState {
    const childrenArray = React.Children.toArray(props.children);
    const total = childrenArray.length || 0;
    const index = total > 1 ? Math.min(props.index || 0, total - 1) : 0;
    const offset = width * index;

    return {
      total,
      index,
      offset,
      width,
      height,
    };
  }

  onScrollBegin = () => {
    this.internals.isScrolling = true;
  }

  onScrollEnd = (e: any) => {
    this.internals.isScrolling = false;
    this.updateIndex(e.nativeEvent.contentOffset ? e.nativeEvent.contentOffset.x : e.nativeEvent.position * this.state.width);
  }

  onScrollEndDrag = (e: any) => {
    const { contentOffset: { x: newOffset } } = e.nativeEvent;
    const childrenArray = React.Children.toArray(this.props.children);
    const { index } = this.state;
    const { offset } = this.internals;

    if (offset === newOffset && (index === 0 || index === childrenArray.length - 1)) {
      this.internals.isScrolling = false;
    }
  }

  updateIndex = (offset: number) => {
    const diff = offset - this.internals.offset;
    const step = this.state.width;
    let index = this.state.index;

    if (!diff) return;

    index = index + Math.round(diff / step);
    this.internals.offset = offset;
    this.setState({ index });
  }

  swipe = () => {
    if (this.internals.isScrolling || this.state.total < 2) return;

    const diff = this.state.index + 1;
    const x = diff * this.state.width;

    this.scrollView.current?.scrollTo({ x, y: 0, animated: true });
    this.internals.isScrolling = true;

    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  }

  renderScrollView = (pages: React.ReactNode[]) => (
    <ScrollView 
      ref={this.scrollView}
      {...this.props}
      contentContainerStyle={[this.props.style]}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}
    >
      {pages.map((page, i) => (
        <View style={[styles.fullScreen, styles.slide]} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  )

  renderPagination = () => {
    if (this.state.total <= 1) return null;

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />;
    const Dot = <View style={styles.dot} />;

    let dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(key === this.state.index ? React.cloneElement(ActiveDot, { key }) : React.cloneElement(Dot, { key }));
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  }

  renderButton = () => {
    const { onLastSlideButtonPress } = this.props;
    const lastScreen = this.state.index === this.state.total - 1;

    return (
      <View pointerEvents="box-none" style={[styles.buttonWrapper, styles.fullScreen]}>
        {lastScreen
          ? <Button onPress={onLastSlideButtonPress}>Start Now</Button>
          : <Button onPress={this.swipe}>Continue</Button>
        }
      </View>
    );
  }

  render() {
    const childrenArray = React.Children.toArray(this.props.children);

    return (
      <View style={[styles.container, styles.fullScreen]}>
        {childrenArray && this.renderScrollView(childrenArray)}
        {this.renderPagination()}
        {this.renderButton()}
      </View>
    );
  }
}

export default Swiper;
