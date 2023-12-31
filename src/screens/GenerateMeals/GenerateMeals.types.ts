// GenerateMeals.types.ts

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export interface GenerateMealsPageProps {
  navigation: StackNavigationProp<RootStackParamList, 'GenerateMeals'>;
  route: RouteProp<RootStackParamList, 'GenerateMeals'>;
}

export interface MealPlanSetting {
    recipesCount: number;
    minCalories: number;
    maxCalories: number;
  }
    