import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './GenerateMeals.styles';
import { useSelectedMeals } from '../../context/SelectedMealsContext';
import PremiumButton from '@components/PremiumButton/PremiumButton';
import { generateMealPlan } from '@api/MealPlanAPI';
import { MealPlanRequest } from '@api/MealPlanAPI.types'

const SubmitPage: React.FC = () => {
  const { selectedMeals, selectedStores, selectedDiet, mealSettings, initialMealSelections } = useSelectedMeals();
  const [showStores, setShowStores] = useState(false);
  const [showMealSettings, setShowMealSettings] = useState(false);
  const [showPlanSettings, setShowPlanSettings] = useState(false);


  
  const handleSubmit = async () => {
    const mealPlanData: MealPlanRequest = {
      diet_type: selectedDiet,
      breakfast_recipes: parseInt(mealSettings.Breakfast?.recipeCount || '0'),
      breakfast_min_cal: parseInt(mealSettings.Breakfast?.minCalories || '0'),
      breakfast_max_cal: parseInt(mealSettings.Breakfast?.maxCalories || '0'),
      lunch_recipes: parseInt(mealSettings.Lunch?.recipeCount || '0'),
      lunch_min_cal: parseInt(mealSettings.Lunch?.minCalories || '0'),
      lunch_max_cal: parseInt(mealSettings.Lunch?.maxCalories || '0'),
      dinner_recipes: parseInt(mealSettings.Dinner?.recipeCount || '0'),
      dinner_min_cal: parseInt(mealSettings.Dinner?.minCalories || '0'),
      dinner_max_cal: parseInt(mealSettings.Dinner?.maxCalories || '0'),
      dietary_restrictions: ["no dairy"],  // Hardcoded
      flavor_profiles: [],                // Hardcoded
      organic_preference: false,          // Hardcoded
      budget: 45.2                        // Hardcoded
    };

    generateMealPlan(mealPlanData)
    .then(data => {
      console.log('Meal Plan Generated:', data);
      return data;
    })
    .catch(error => {
      console.error('Error generating meal plan:', error);
      // Handle error response
    });
};

 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Summary of your selections</Text>

      <TouchableOpacity style={styles.section} onPress={() => setShowStores(!showStores)}>
        <Text style={styles.subtitle}>Selected Stores:</Text>
        {showStores && selectedStores.map((store, index) => (
          <Text key={index} style={styles.content}>{store}</Text>
        ))}
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setShowMealSettings(!showMealSettings)}>
        <Text style={styles.subtitle}>Meal Settings needed:</Text>
        {showMealSettings && Object.entries(initialMealSelections).map(([meal, isSelected], index) => (
          <Text key={index} style={styles.content}>
            {meal}: {isSelected ? "Selected" : "Not Selected"}
          </Text>
        ))}
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setShowPlanSettings(!showPlanSettings)}>
        <Text style={styles.subtitle}>Meal Plan Settings:</Text>
        {showPlanSettings && (
          <>
            <Text style={styles.content}>Diet Type: {selectedDiet}</Text>
            {Object.entries(mealSettings).map(([meal, settings], index) => (
              <View key={index}>
                <Text style={styles.content}>{meal}</Text>
                <Text style={styles.content}>Recipes Wanted: {settings.recipeCount}</Text>
                <Text style={styles.content}>Calories: {settings.minCalories} - {settings.maxCalories}</Text>
              </View>
            ))}
          </>
        )}
      </TouchableOpacity>
    <View style={{left:79}}>
    <PremiumButton
    title="Generate my Meals"
    onPress={() => handleSubmit()} // Wrap handleSubmit in an anonymous function
    color="#2dd881"
    />
   </View>

    </ScrollView>
  );
};

export default SubmitPage;




