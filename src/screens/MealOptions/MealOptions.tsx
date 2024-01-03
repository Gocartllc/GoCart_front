import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from './MealOptions.styles';
import { MealOptionsScreenProps } from './MealOptions.types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PremiumButton from '@components/PremiumButton';
import { useSelectedMeals } from '../../context/SelectedMealsContext';

const MealOptions: React.FC<MealOptionsScreenProps> = ({ navigation }) => {
  const { selectedMeals, setSelectedMeals, setInitialMealSelections } = useSelectedMeals();

  
  interface SelectedMealsType {
    Breakfast: boolean;
    Lunch: boolean;
    Dinner: boolean;
  }

  const handleSelectMeal = (meal: keyof SelectedMealsType) => {
    setSelectedMeals(prevMeals => ({
      ...prevMeals,
      [meal]: !prevMeals[meal]
    }));
  };
  

  const isNextButtonEnabled = Object.values(selectedMeals).some(value => value);

  const navigateToFirstSelectedMeal = () => {
    const firstSelectedMeal = (Object.keys(selectedMeals) as Array<keyof SelectedMealsType>).find(meal => selectedMeals[meal]);
    if (firstSelectedMeal) {
      // Set the initial meal selections before navigating
      setInitialMealSelections(selectedMeals);
      navigation.navigate(`${firstSelectedMeal}`, { selectedMeals });
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get your meals plans started</Text>
      <Text style={styles.subtitle}>First tell us which meal settings you're intersted in finding recipes for.</Text>

      <View style={[styles.checkboxContainer, { marginBottom: 260 }]}>
  {(Object.keys(selectedMeals) as Array<keyof SelectedMealsType>).map((meal) => (
    <CheckBox
      title={meal}
      checked={selectedMeals[meal]}
      onPress={() => handleSelectMeal(meal)}
      key={meal}
      containerStyle={styles.checkboxContainer}
      textStyle={styles.checkboxLabel}
    />
  ))}
</View>
      

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PremiumButton
          title="Plan your meals"
          onPress={navigateToFirstSelectedMeal}
          color="#2dd881"
        />
      </View>
    </View>
  );
};

export default MealOptions;
