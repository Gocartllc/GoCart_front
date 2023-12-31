import { ViewStyle } from 'react-native';

export interface SwiperProps {
  horizontal?: boolean;
  pagingEnabled?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  bounces?: boolean;
  scrollsToTop?: boolean;
  removeClippedSubviews?: boolean;
  automaticallyAdjustContentInsets?: boolean;
  index?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
  renderLastSlideButton?: () => React.ReactNode;
  onLastSlideButtonPress?: () => void; // Add this line
}

export interface SwiperState {
  total: number;
  index: number;
  offset: number;
  width: number;
  height: number;
}

export interface Internals {
  isScrolling: boolean;
  offset: number;
}
