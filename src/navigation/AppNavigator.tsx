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
import Dashboard from '@screens/Dashboard/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


export type RootStackParamList = {
  Onboarding: undefined;  
  StoreSelectionUI: { selectedMeals: { [key: string]: boolean } } | undefined;
  ChooseDietType: { selectedMeals: { [key: string]: boolean } };
  GenerateMeals: undefined;
  MealOptions: undefined;
  Breakfast: { selectedMeals: { [key: string]: boolean } };
  Lunch: { selectedMeals: { [key: string]: boolean } };
  Dinner: { selectedMeals: { [key: string]: boolean } };
  MealPlan: undefined;
  Dashboard: undefined;
};


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();


function MealPlanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MealPlan" component={MealPlan} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="StoreSelectionUI" component={StoreSelectionUI} />
      <Stack.Screen name="ChooseDietType" component={ChooseDietType} />
      <Stack.Screen name="MealOptions" component={MealOptions} />
      <Stack.Screen name="Breakfast" component={Breakfast} />
      <Stack.Screen name="Lunch" component={Lunch} />
      <Stack.Screen name="Dinner" component={Dinner} />
      <Stack.Screen name="GenerateMeals" component={GenerateMeals} />
      <Stack.Screen name="MealPlan" component={MealPlan} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

// The root navigator is now a bottom tab navigator
const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'MealPlan') {
          const iconName = focused ? 'news' : 'news';
          return <Entypo name={iconName} size={size} color={color} />;
        } else if (route.name === 'Dashboard') {
          const iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'ShoppingCart') {
          const iconName = focused ? 'shopping-cart' : 'shopping-cart';
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        } else if (route.name === 'Recipes') {
          const iconName = focused ? 'open-book' : 'book';
          return <Entypo name={iconName} size={size} color={color} />;
        }
        // ... include all other routes and set the icon accordingly
    
        // Return null or a default icon if no match is found
        return null;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#F1F6F7', // Set this to match your app's background color
        borderTopWidth: 0, // This removes the border on the top of the tab bar
        elevation: 0, // This removes the shadow on Android
        shadowOpacity: 0, // This removes the shadow on iOS
      },
          headerStyle: {
      backgroundColor: '#F1F6F7', // Set the color you want for the header
    },
    headerTintColor: '#2dd881', // Set the color for header's title and buttons
    backgroundColor: '#fff', // Set this to match your app's background color
    borderTopWidth: 0, // This removes the border on the top of the tab bar
    elevation: 0, // This removes the shadow on Android
    shadowOpacity: 0, // This removes the shadow on iOS
    height: 60, // Optional: change the height if needed
    })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Health Stats' }} />
      <Tab.Screen name="Recipes" component={Dashboard} options={{ title: 'Recipes' }} />
      <Tab.Screen name="MealPlan" component={MealPlanStack} options={{ title: 'Meal Plans' }} />
      <Tab.Screen name="Profile" component={Dashboard} options={{ title: 'Profile' }} />
      <Tab.Screen name="ShoppingCart" component={Dashboard} options={{ title: 'Cart' }} />

    </Tab.Navigator>
  );
};

export default AppNavigator;