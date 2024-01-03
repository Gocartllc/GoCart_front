// src/screens/BreakfastScreen/BreakfastScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { styles } from './Breakfast.styles';
import { BreakfastScreenProps } from './Breakfast.types';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '@components/Button';
import PremiumButton from '@components/PremiumButton';
import PremiumTextField from '@components/PremiumTextField';
import PremiumDropDownPicker from '@components/PremiumDropDownPicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useSelectedMeals } from '../../../context/SelectedMealsContext';


const BreakfastScreen: React.FC<BreakfastScreenProps> = ({ navigation, route }) => {
  //  const [isFocused, setIsFocused] = useState(false);

  const { selectedMeals, setSelectedMeals, mealSettings, setMealSettings } = useSelectedMeals();

  const [recipeCount, setRecipeCount] = useState<string>('1');
  const [maxCalories, setMaxCalories] = useState<string>('');
  const [minCalories, setMinCalories] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
  ]);

  const navigateToNextMeal = () => {
    let updatedSelectedMeals = { ...selectedMeals, Breakfast: false };
    setSelectedMeals(updatedSelectedMeals);
  
    // Update mealSettings for Lunch
    const updatedMealSettings = {
      ...mealSettings,
      Breakfast: {
        recipeCount,
        maxCalories,
        minCalories,
      },
    };
    setMealSettings(updatedMealSettings);

    console.log("Value of: ", updatedSelectedMeals.Lunch)

    if (updatedSelectedMeals.Lunch == true) {
      navigation.navigate('Lunch', { selectedMeals: updatedSelectedMeals });
    }
    else if (updatedSelectedMeals.Dinner) {
      navigation.navigate('Dinner', { selectedMeals: updatedSelectedMeals });
    } else {
      navigation.navigate('GenerateMeals');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Breakfast Plan</Text>

      <Text style={styles.question}>How many different recipes do you want?</Text>
 
 <View style={dropstyle.container}>
      <FontAwesome6
        name="clipboard-list"
        size={24}
        color={open ? '#2dd881' : '#aaa'} // Change isFocused to open
        style={dropstyle.icon}
      />
      <DropDownPicker
      containerStyle={{zIndex: 99}}
      dropDownDirection="BOTTOM"
      open={open}
      multiple={false}
      items={items}
      listMode="SCROLLVIEW"
      value={recipeCount}
      setOpen={setOpen}
      style={dropstyle.picker}
      textStyle={dropstyle.textStyle}
      labelStyle={dropstyle.labelStyle}
      setValue={setRecipeCount}
      setItems={setItems}
      dropDownContainerStyle={{ ...dropstyle.dropDownContainer, zIndex: 5000, elevation: 5 }}
      zIndex={5000}
      tickIconStyle={dropstyle.tickIcon as any} 
      arrowIconStyle={dropstyle.arrowIcon as any}
      placeholderStyle={dropstyle.placeholder}
      />
  </View>




      <Text style={styles.question}>What is the max calorie count for a breakfast dish?</Text>
      <PremiumTextField
        placeholder="Max"
        iconName="calculator"
        secureTextEntry={false}
        onChangeText={setMaxCalories} 
        value={maxCalories}  
        />



      <Text style={styles.question}>What is the minimum calorie you're willing to take for a breakfast dish?</Text>
      <PremiumTextField
        placeholder="Min"
        iconName="numeric"
        secureTextEntry={false}
        onChangeText={setMinCalories} 
        value={minCalories}      
        />

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <PremiumButton
    title="Continue"
    onPress={navigateToNextMeal}
    color="#2dd881"
  />
</View>
    </View>
  );
};


const dropstyle = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 10,
    zIndex: 1000,       // Increase zIndex
    elevation: 20,      // Increase elevation
    marginBottom: 30
  },
  icon: {
    marginLeft: 20,
  },
  pickerContainer: {
    height: 50,
    width: 260,
    marginBottom: 0,
    zIndex: 10, // Increase zIndex

  },
  picker: {
    width: 260,
    height: 50,
    marginBottom: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
  },
  labelStyle: {
    fontSize: 18,
    color: '#000',
  },
  dropDownContainer: {
    width: 260,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:10,
    zIndex: 1000
  },
  tickIcon: {
    tintColor: '#2dd881',
  },
  arrowIcon: {
    tintColor: '#2dd881',
  },
  placeholder: {
    color: '#aaa',
  },
  });
  
export default BreakfastScreen;
