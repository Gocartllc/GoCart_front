// Dinner.types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator';

type DinnerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dinner'>;
type DinnerScreenRouteProp = RouteProp<RootStackParamList, 'Dinner'>;

export interface DinnerProps {
  route: RouteProp<RootStackParamList, 'Dinner'>;
  navigation: StackNavigationProp<RootStackParamList, 'Dinner'>;
}
