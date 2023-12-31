// Lunch.types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator'; // Adjust the import path as needed

type LunchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Lunch'>;
type LunchScreenRouteProp = RouteProp<RootStackParamList, 'Lunch'>;


export interface LunchProps {
  route: RouteProp<RootStackParamList, 'Lunch'>;
  navigation: StackNavigationProp<RootStackParamList, 'Lunch'>;
}
