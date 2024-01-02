// StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoreSelectionUI from '@screens/StoreSelectionUI/StoreSelectionUI';
import ChooseDietType from '@screens/ChooseDietType';
import MealOptions from '@screens/MealOptions';
import Onboarding from '@screens/Onboarding';
import Breakfast from '@screens/MealSettings/Breakfast';
import Lunch from '@screens/MealSettings/Lunch';
import Dinner from '@screens/MealSettings/Dinner';
import GenerateMeals from '@screens/GenerateMeals';
import MealPlan from '@screens/MealPlan/MealPlan';
import { RootStackParamList } from './navigationStacktypes';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainTab" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="StoreSelectionUI" component={StoreSelectionUI} />
    <Stack.Screen name="ChooseDietType" component={ChooseDietType} />
    <Stack.Screen name="MealOptions" component={MealOptions} />
    <Stack.Screen name="Breakfast" component={Breakfast} />
    <Stack.Screen name="Lunch" component={Lunch} />
    <Stack.Screen name="Dinner" component={Dinner} />
    <Stack.Screen name="GenerateMeals" component={GenerateMeals} />
    <Stack.Screen name="MealPlan" component={MealPlan} />
  </Stack.Navigator>
);

export default StackNavigator;
