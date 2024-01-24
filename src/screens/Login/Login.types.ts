// Dinner.types.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/navigationStacktypes'; // Adjust the import path as needed

type LoginTypeNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginTypeRouteProp = RouteProp<RootStackParamList, 'Login'>;

export interface LoginTypeProps {
  navigation: LoginTypeNavigationProp;
  route: LoginTypeRouteProp;
}
