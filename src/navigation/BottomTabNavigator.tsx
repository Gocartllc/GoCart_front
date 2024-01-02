// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '@screens/Profile';
import ShoppingCart from '@screens/ShoppingCart';
import HealthStats from '@screens/HealthStats';
import Dashboard from '@screens/Dashboard/Dashboard';


const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          const iconName = focused ? 'home-outline' : 'home';
          return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'HealthStats') {
          const iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'ShoppingCart') {
          const iconName = focused ? 'shopping-cart' : 'shopping-cart';
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          const iconName = focused ? 'face-man-profile' : 'face-man-profile';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
        // ... include all other routes and set the icon accordingly
    
        // Return null or a default icon if no match is found
        return null;
      },
      tabBarActiveTintColor: '#2dd881',
      tabBarInactiveTintColor: '#4f5d75',
      tabBarStyle: {
        backgroundColor: '#F1F6F7', // Set this to match your app's background color
        borderTopWidth: 0, // This removes the border on the top of the tab bar
        elevation: 0, // This removes the shadow on Android
        shadowOpacity: 0, // This removes the shadow on iOS
      },
          headerStyle: {
      backgroundColor: '#F1F6F7', // Set the color you want for the header
      borderTopWidth: 0, // This removes the border on the top of the tab bar
      elevation: 0, // This removes the shadow on Android
      shadowOpacity: 0, // This removes the shadow on iOS
    },
    headerTitle: '',
    headerTintColor: '#2dd881', // Set the color for header's title and buttons
    backgroundColor: '#fff', // Set this to match your app's background color
    borderTopWidth: 0, // This removes the border on the top of the tab bar
    elevation: 0, // This removes the shadow on Android
    shadowOpacity: 0, // This removes the shadow on iOS
    })}
    >
    <Tab.Screen name="Home" component={Dashboard} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
    <Tab.Screen name="HealthStats" component={HealthStats} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
