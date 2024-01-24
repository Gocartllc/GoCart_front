import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {styles} from './Recipe.styles';
import { RecipeProps } from './Recipe.types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RecipeCard from '@components/RecipeCard';


const data = {
  "meal_plan": {
      "meal_plan": {
          "diet_type": "keto",
          "dietary_restrictions": "no dairy",
          "meals": {
              "breakfast": [
                  {
                      "dish_name": "Super Spinach and Mushroom Omelette",
                      "calorie_count": 300,
                      "grocerylist": [
                          "large eggs",
                          "spinach",
                          "mushrooms",
                          "salt",
                          "black pepper",
                          "olive oil"
                      ],
                      "ingredients": [
                          "4 large eggs",
                          "1 cup spinach",
                          "1/2 cup mushrooms",
                          "1/4 teaspoon salt",
                          "1/8 teaspoon black pepper",
                          "1 tablespoon olive oil"
                      ],
                      "directions": [
                          "Heat olive oil in a non-stick skillet over medium heat.",
                          "Add the mushrooms and cook until softened.",
                          "Add the spinach and cook until wilted.",
                          "In a bowl, beat the eggs and season with salt and pepper.",
                          "Pour the beaten eggs over the vegetables in the skillet.",
                          "Cook until the edges start to set, then gently lift and fold the omelette in half.",
                          "Continue cooking until the eggs are fully set.",
                          "Serve hot."
                      ]
                  },
                                      {
                      "dish_name": "Spinach and Mushroom Omelette",
                      "calorie_count": 300,
                      "grocerylist": [
                          "large eggs",
                          "spinach",
                          "mushrooms",
                          "salt",
                          "black pepper",
                          "olive oil"
                      ],
                      "ingredients": [
                          "4 large eggs",
                          "1 cup spinach",
                          "1/2 cup mushrooms",
                          "1/4 teaspoon salt",
                          "1/8 teaspoon black pepper",
                          "1 tablespoon olive oil"
                      ],
                      "directions": [
                          "Heat olive oil in a non-stick skillet over medium heat.",
                          "Add the mushrooms and cook until softened.",
                          "Add the spinach and cook until wilted.",
                          "In a bowl, beat the eggs and season with salt and pepper.",
                          "Pour the beaten eggs over the vegetables in the skillet.",
                          "Cook until the edges start to set, then gently lift and fold the omelette in half.",
                          "Continue cooking until the eggs are fully set.",
                          "Serve hot."
                      ]
                  }
              ],
              "lunch": [
                  {
                      "dish_name": "Grilled Chicken Caesar Salad",
                      "calorie_count": 350,
                      "grocerylist": [
                          "boneless, skinless chicken breasts",
                          "olive oil",
                          "garlic",
                          "dried oregano",
                          "Salt and pepper",
                          "romaine lettuce",
                          "Parmesan cheese",
                          "Caesar dressing"
                      ],
                      "ingredients": [
                          "2 boneless, skinless chicken breasts",
                          "2 tablespoons olive oil",
                          "2 cloves garlic, minced",
                          "1 teaspoon dried oregano",
                          "Salt and pepper to taste",
                          "4 cups romaine lettuce, chopped",
                          "1/4 cup grated Parmesan cheese",
                          "2 tablespoons Caesar dressing"
                      ],
                      "directions": [
                          "Preheat the grill to medium heat.",
                          "In a small bowl, mix together the olive oil, minced garlic, dried oregano, salt, and pepper.",
                          "Brush the chicken breasts with the olive oil mixture.",
                          "Grill the chicken for 6-8 minutes per side, or until cooked through.",
                          "Remove the chicken from the grill and let it rest for a few minutes before slicing.",
                          "In a large bowl, combine the romaine lettuce, Parmesan cheese, and Caesar dressing.",
                          "Add the sliced grilled chicken on top of the salad.",
                          "Toss well to coat everything with the dressing.",
                          "Serve immediately."
                      ]
                  }
              ],
              "dinner": []
          }
      }
  },
  "grocery_list": [
      {
          "brand": "Kroger",
          "description": "Kroger® Grade A Large Eggs",
          "size": "12 ct"
      },
      {
          "brand": "",
          "description": "Spinach",
          "size": "1 lb"
      },
      {
          "brand": "Heritage Farm",
          "description": "Heritage Farm® Boneless & Skinless Chicken Breasts with Rib Meat",
          "size": "1 lb"
      },
      {
          "brand": "Marzetti",
          "description": "Marzetti Supreme Caesar Dressing",
          "size": "13 fl oz"
      },
      {
          "brand": "Kroger",
          "description": "Kroger® Extra Virgin Olive Oil",
          "size": "25.4 fl oz"
      },
      {
          "brand": "Kroger",
          "description": "Kroger® Iodized Salt",
          "size": "26 oz"
      },
      {
          "brand": "Spice World",
          "description": "Spice World Organic Garlic",
          "size": "8 oz"
      },
      {
          "brand": "Litehouse",
          "description": "Litehouse Freeze Dried Oregano",
          "size": "0.28 oz"
      }
  ]
};

const RecipeComponent = ({ navigation}: RecipeProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shop Ingredients</Text>
        <FontAwesome5 name={"shopping-cart"} size={24} color={"#2dd881"}/>
      </View>
      <View style={styles.imageContainer}>
      </View>
      <View style={styles.ratingContainer}>
  </View>
      <Text style={styles.foodName}>Super Spinach and Mushroom Omelette</Text>
      <View style={styles.ratingContainer}>
        
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={styles.badgeContainer}>
    <View>
    <RecipeCard
        dishName="Gluten"
        imagePath={require('../../images/wheat.png')}
        onPress={() => console.log('Card pressed')}
        cardWidth={100}
        cardPadding={1} 
      />
    </View>
    <View>
    <RecipeCard
        dishName="Spicy"
        imagePath={require('../../images/spicy.png')}
        onPress={() => console.log('Card pressed')}
        cardWidth={100}
        cardPadding={1} 
      />
    </View>
    <View>
      <RecipeCard
        dishName="Spicy"
        imagePath={require('../../images/vegetarian.png')}
        onPress={() => console.log('Card pressed')}
        cardWidth={100}
        cardPadding={1} 
      />
    </View>
  </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Cook Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeComponent;
