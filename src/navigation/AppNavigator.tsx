import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import StackNavigator from './StackNavigator';

const AppNavigator: React.FC = () => (
    <StackNavigator />
);

export default AppNavigator;
