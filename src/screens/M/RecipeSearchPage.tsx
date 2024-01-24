// Import React and React Native components
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, Alert } from "react-native";
import { Recipe, RecipeSearchPageTypeProps } from "./RecipeSearchPage.types";
import { styles } from "./RecipeSearchPage.styles";
import PremiumButton from "@components/PremiumButton/PremiumButton";


// Define a dummy JSON object to store some recipe data
const recipeData = [
    {
      _id: { $oid: "659e4629d9fae3eef447bcfa" },
      meal_setting: "breakfast",
      dish_name: "Super Spinach and Mushroom Omelette",
      calorie_count: 300,
      estimated_time: "1 hr 10 min",
      // Add other fields if necessary
    },
    {
      _id: { $oid: "65af1274379ff6f1ba5b6192" },
      meal_setting: "lunch",
      dish_name: "Grilled Chicken Caesar Salad",
      calorie_count: 350,
      estimated_time: "30 min",
      // Add other fields if necessary
    }
    // You can add more recipes in similar format
  ];
  
  

// Define a custom component to render each recipe card
const RecipeCard = ({ item }: { item: Recipe }) => {
    const handleCardPress = () => {
        Alert.alert(`Clicked on: ${item.dish_name}`);
    };
  
    return (
      <TouchableOpacity style={[styles.card, styles.shadowEffect, {backgroundColor:"#fff"}]} onPress={handleCardPress}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.dish_name}</Text>
          <Text style={styles.cardTime}>{item.estimated_time}</Text>
          <Text style={styles.cardCalories}>{`${item.calorie_count} Cal`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

// Define the main component for the recipe search page
const RecipeSearchPage: React.FC<RecipeSearchPageTypeProps> = ({ navigation }) => {
    const [recipeData, setRecipeData] = useState<Recipe[]>([]);
    const [filteredData, setFilteredData] = useState<Recipe[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      // Fetch images and set recipe data
      const fetchImages = async () => {
        try {
          const responseBreakfast = await fetch('http://127.0.0.1:8000/meal-settings-photo/breakfast');
          const dataBreakfast = await responseBreakfast.json();
  
          const responseLunch = await fetch('http://127.0.0.1:8000/meal-settings-photo/lunch');
          const dataLunch = await responseLunch.json();
  
          const initialData = [
            {
              _id: { $oid: "659e4629d9fae3eef447bcfa" },
              meal_setting: "breakfast",
              dish_name: "Super Spinach and Mushroom Omelette",
              calorie_count: 300,
              estimated_time: "1 hr 10 min",
              image: dataBreakfast.photo_url
            },
            {
              _id: { $oid: "65af1274379ff6f1ba5b6192" },
              meal_setting: "lunch",
              dish_name: "Grilled Chicken Caesar Salad",
              calorie_count: 350,
              estimated_time: "30 min",
              image: dataLunch.photo_url
            }
          ];

          setRecipeData(initialData);
          setFilteredData(initialData); // Initialize filtered data with initial data
        } catch (error) {
          console.error('Failed to fetch images', error);
        }
      };
  
      fetchImages();
    }, []);

    useEffect(() => {
      // Update filtered data based on search input
      const filtered = recipeData.filter(recipe => 
        recipe.dish_name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }, [search, recipeData]);



  // Define a function to handle the search input change
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  // Define a function to handle the search button press
  const handleSearchPress = () => {
    // You can implement your own logic to filter the recipe data based on the search input
    console.log("Search button pressed");
  };

  // Define a function to handle the cook now button press
  const handleCookNowPress = () => {
    // You can implement your own logic to show the recipes that can be cooked now
    console.log("Cook now button pressed");
  };

  // Define a function to handle the breakfast button press
  const handleBreakfastPress = () => {
    // You can implement your own logic to show the recipes that are suitable for breakfast
    console.log("Breakfast button pressed");
  };

  // Define a function to handle the low price button press
  const handleLowPricePress = () => {
    // You can implement your own logic to show the recipes that are low in price
    console.log("Low price button pressed");
  };

  // Return the JSX elements for the recipe search page
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Recipes</Text>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={search}
          onChangeText={handleSearchChange}
        />
      </View>
      <View style={styles.filterButtons}>
        <PremiumButton
        title="Lunch"
        onPress={handleCookNowPress}
        color="#FFF"
        textcolor='#2dd881'
        btnwidth={100} 
        btnborderradius={15}
        />
        <PremiumButton
        title="Breakfast"
        onPress={handleBreakfastPress}
        color="#FFF"
        textcolor='#2dd881'
        btnwidth={100} 
        btnborderradius={15}
        />
        <PremiumButton
        title="Dinner"
        onPress={handleLowPricePress}
        color="#FFF"
        textcolor='#2dd881'
        btnwidth={100} 
        btnborderradius={15}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={RecipeCard}
        keyExtractor={(item) => item._id.$oid}
        style={styles.recipeList}
      />

    </View>
  );
};



// Export the main component
export default RecipeSearchPage;
