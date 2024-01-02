export type RootStackParamList = {
    Onboarding: any;  
    StoreSelectionUI: { selectedMeals: { [key: string]: boolean } } | undefined;
    ChooseDietType: { selectedMeals: { [key: string]: boolean } };
    GenerateMeals: undefined;
    MealOptions: undefined;
    Breakfast: { selectedMeals: { [key: string]: boolean } };
    Lunch: { selectedMeals: { [key: string]: boolean } };
    Dinner: { selectedMeals: { [key: string]: boolean } };
    MealPlan: any;
    Dashboard: any;
    ShoppingCart: any;
    HealthStat: any;
    MainTab: undefined;
  };