import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectedMealsProvider } from './src/context/SelectedMealsContext';
import { StatusBar } from 'react-native';


const App: React.FC = () => {
  return (
    <>
    <SelectedMealsProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SelectedMealsProvider></>
  );
};

export default App;
