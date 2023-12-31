// Breakfast.types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator'; // Adjust the import path as needed

type BreakfastScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Breakfast'>;
type BreakfastScreenRouteProp = RouteProp<RootStackParamList, 'Breakfast'>;

interface SelectedMealsType {
  Breakfast: boolean;
  Lunch: boolean;
  Dinner: boolean;
}



export interface BreakfastScreenProps {
  route: RouteProp<RootStackParamList, 'Breakfast'>;
  navigation: StackNavigationProp<RootStackParamList, 'Breakfast'>;
}