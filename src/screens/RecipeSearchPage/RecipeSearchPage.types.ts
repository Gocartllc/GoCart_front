
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/navigationStacktypes'; // Adjust the import path as needed



export interface Recipe {
    _id: { $oid: string };
    meal_setting: string;
    dish_name: string;
    calorie_count: number;
    estimated_time: string;
    image: string; // Add the image property
    // ... any other properties you might have
  }
  
  



type RecipeSearchPageTypeNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeSearchPage'>;
type RecipeSearchPageTypeRouteProp = RouteProp<RootStackParamList, 'RecipeSearchPage'>;

export interface RecipeSearchPageTypeProps {
  navigation: RecipeSearchPageTypeNavigationProp;
  route: RecipeSearchPageTypeRouteProp;
}


  

