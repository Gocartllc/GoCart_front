// StoreSelectionUI.types.ts

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator'; // Adjust the import path as needed
import { RouteProp } from '@react-navigation/native';

export interface Store {
    name: string;
    logo: any;
}

type StoreSelectionUINavigationProp = StackNavigationProp<RootStackParamList, 'StoreSelectionUI'>;

// Updated to reference 'StoreSelectionUI' instead of 'Dinner'
type StoreSelectionUIRouteProp = RouteProp<RootStackParamList, 'StoreSelectionUI'>;

export interface StoreSelectionProps {
  navigation: StoreSelectionUINavigationProp;
  route: StoreSelectionUIRouteProp;
}
