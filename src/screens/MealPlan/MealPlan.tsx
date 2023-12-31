import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Define the structure of the meals data
interface Meal {
  dish_name: string;
  calorie_count: number;
  grocerylist: string[];
  ingredients: string[];
  directions: string[];
}

interface Meals {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
}

const MealPlan = () => {
  const [activeTab, setActiveTab] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');
  const [expandedId, setExpandedId] = useState<number | null>(null);
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
} as { meal_plan: { meal_plan: { meals: Meals } } };

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expandedId]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const MealTab = ({ mealType }: { mealType: 'breakfast' | 'lunch' | 'dinner' }) => (
    <TouchableOpacity onPress={() => setActiveTab(mealType)}>
      <Text style={{ fontWeight: activeTab === mealType ? 'bold' : 'normal' }}>
        {mealType.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Meal Plan</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
        <MealTab mealType="breakfast" />
        <MealTab mealType="lunch" />
        <MealTab mealType="dinner" />
      </View>
      <ScrollView>
        {data.meal_plan.meal_plan.meals[activeTab].map((meal: Meal, index: number) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18 }}>{meal.dish_name}</Text>
            <Text>Calories: {meal.calorie_count}</Text>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Text>View Details</Text>
            </TouchableOpacity>
            {expandedId === index && (
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Ingredients:</Text>
                {meal.ingredients.map((ingredient: string, idx: number) => (
                  <Text key={idx} style={{ marginLeft: 10 }}>{ingredient}</Text>
                ))}
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Directions:</Text>
                {meal.directions.map((direction: string, idx: number) => (
                  <Text key={idx} style={{ marginLeft: 10 }}>{idx + 1}. {direction}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MealPlan;