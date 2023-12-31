// Dinner.types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator'; // Adjust the import path as needed

type ChooseDietTypeNavigationProp = StackNavigationProp<RootStackParamList, 'ChooseDietType'>;
type ChooseDietTypeRouteProp = RouteProp<RootStackParamList, 'ChooseDietType'>;

export interface ChooseDietTypeProps {
  navigation: ChooseDietTypeNavigationProp;
  route: ChooseDietTypeRouteProp;
}
