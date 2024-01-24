// src/screens/StoreSelectionUI/StoreSelectionUI.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Store, StoreSelectionProps } from './StoreSelectionUI.types';
import { styles } from './StoreSelectionUI.styles';
import PremiumButton from '@components/PremiumButton/PremiumButton';
import { useSelectedMeals } from '../../context/SelectedMealsContext';

const StoreSelectionUI: React.FC<StoreSelectionProps> = ({ navigation }) => {
  const { setSelectedStores } = useSelectedMeals();
  const [selectedStoresState, setSelectedStoresState] = useState<{ [key: string]: boolean }>({});

  const goToMealsOptions = () => {
    setSelectedStores(Object.keys(selectedStoresState).filter(key => selectedStoresState[key]));
    
    const selectedMealsObject = {
      Breakfast: false,
      Lunch: false,
      Dinner: false
    };
  
    navigation.navigate('ChooseDietType', { selectedMeals: selectedMealsObject });
  };

  const toggleStore = (store: string) => {
    setSelectedStoresState(prev => ({ ...prev, [store]: !prev[store] }));
  };
  

  const stores = [
    { name: 'Publix', logo: require('@assets/logos/publix.png') },
    { name: 'Walmart', logo: require('@assets/logos/walmart.jpeg') },
    { name: 'WholeFoods', logo: require('@assets/logos/whole_food.png') },
    { name: 'Aldi', logo: require('@assets/logos/aldi.png') },
    { name: 'Target', logo: require('../../assets/logos/target.png') },
    { name: 'Kroger', logo: require('../../assets/logos/kroger.png') },
  ];

  const renderItem = ({ item }: { item: Store }) => (
    <TouchableOpacity 
      style={styles.storeTile} 
      onPress={() => toggleStore(item.name)}
    >
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.storeName}>{item.name}</Text>
      {selectedStoresState[item.name] && (
        <Icon name="check" style={styles.checkIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose your stores</Text>
      <FlatList
        data={stores}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
      {Object.values(selectedStoresState).some(val => val) && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <PremiumButton
            title="Lets get Started!"
            onPress={goToMealsOptions}
            color="#2dd881"
          />
        </View>
      )}
    </View>
  );
};

export default StoreSelectionUI;