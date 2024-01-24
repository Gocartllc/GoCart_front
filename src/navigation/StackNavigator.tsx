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
import Recipe from '@screens/Recipe';
import Login from '@screens/Login';
import UserDetails from '@screens/UserDetails';
import { RootStackParamList } from './navigationStacktypes';
import BottomTabNavigator from './BottomTabNavigator';
import config from 'auth0-configuration';
import { Auth0Provider } from 'react-native-auth0';
import RecipeSearchPage from '@screens/RecipeSearchPage';


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => (
  <Auth0Provider domain={config.domain} clientId={config.clientId}>
  <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainTab" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="RecipeSearchPage" component={RecipeSearchPage} />
    <Stack.Screen name="StoreSelectionUI" component={StoreSelectionUI} />
    <Stack.Screen name="ChooseDietType" component={ChooseDietType} />
    <Stack.Screen name="MealOptions" component={MealOptions} />
    <Stack.Screen name="Breakfast" component={Breakfast} />
    <Stack.Screen name="Lunch" component={Lunch} />
    <Stack.Screen name="Dinner" component={Dinner} />
    <Stack.Screen name="GenerateMeals" component={GenerateMeals} />
    <Stack.Screen name="MealPlan" component={MealPlan} />
    <Stack.Screen name="Recipe" component={Recipe} />
    <Stack.Screen name="UserDetails" component={UserDetails} />
    <Stack.Screen name="Login" component={Login} />

  </Stack.Navigator>
  </Auth0Provider>
);

export default StackNavigator;
