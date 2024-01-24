// StoreSelectionUI.types.ts

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/navigationStacktypes';
import { RouteProp } from '@react-navigation/native';

export interface Store {
    name: string;
    logo: any;
}

type UserDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'UserDetails'>;


type UserDetailsRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;

export interface UserDetailsTypeProps {
  navigation: UserDetailsNavigationProp;
  route: UserDetailsRouteProp;
}
