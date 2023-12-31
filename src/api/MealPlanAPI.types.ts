
export interface MealPlanRequest {
    diet_type: string;
    breakfast_recipes: number;
    breakfast_min_cal: number;
    breakfast_max_cal: number;
    lunch_recipes: number;
    lunch_min_cal: number;
    lunch_max_cal: number;
    dinner_recipes: number;
    dinner_min_cal: number;
    dinner_max_cal: number;
    dietary_restrictions: string[];
    flavor_profiles: string[];
    organic_preference: boolean;
    budget: number;
}