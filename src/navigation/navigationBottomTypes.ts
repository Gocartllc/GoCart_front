// navigationTypes.ts
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Shopping: undefined;
  HealthStats: undefined;
  // Add other screens as needed
};

// You can also export navigation prop types for convenience
export type TabNavigationProp<T extends keyof TabParamList> = BottomTabNavigationProp<TabParamList, T>;
