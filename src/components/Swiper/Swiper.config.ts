import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEFAULT_PROPS = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  bounces: false,
  scrollsToTop: false,
  removeClippedSubviews: true,
  automaticallyAdjustContentInsets: false,
  index: 0,
};
export { width, height };

