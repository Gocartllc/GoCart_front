// src/screens/ChooseDietTypeScreen/ChooseDietTypeScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './ChooseDietType.styles';
import {ChooseDietTypeProps } from './ChooseDietType.types'
import DropDownPicker from 'react-native-dropdown-picker';
import PremiumButton from '@components/PremiumButton';
import { useSelectedMeals } from '../../context/SelectedMealsContext';



const ChooseDietType: React.FC<ChooseDietTypeProps> = ({ navigation, route }) => {
  const { setSelectedDiet } = useSelectedMeals();
  const { selectedDiet } = useSelectedMeals();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Ketogenic', value: 'Ketogenic' },
    { label: 'Paleolithic', value: 'Paleolithic' },
    { label: 'Mediterranean', value: 'Mediterranean' },
    { label: 'Vegetarian', value: 'Vegetarian' },
    { label: 'Vegan', value: 'Vegan' },
    { label: 'Pescatarian', value: 'Pescatarian' },
    { label: 'Low-carb', value: 'Low-carb' },
    { label: 'High-protein', value: 'High-protein' },

  ]);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your diet type</Text>
      <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', marginBottom:300 }}>
        <DropDownPicker
          containerStyle={{ marginBottom: 20 }}
          open={open}
          value={selectedDiet}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedDiet}
          setItems={setItems}
          style={styles.picker}
          textStyle={styles.textStyle}
        labelStyle={styles.labelStyle}
        dropDownContainerStyle={styles.dropDownContainer}
        />
        <Image source={require('@assets/images/balanced-diet.png')} style={styles.backgroundimg} />
        <PremiumButton
          title="Continue"
          onPress={() => navigation.navigate('MealOptions')}
          color="#2dd881"
        />
      </View>
    </View>
  );
};

export default ChooseDietType;