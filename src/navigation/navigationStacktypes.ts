export type RootStackParamList = {
    Onboarding: undefined;  
    Login: undefined;
    UserDetails: undefined;
    StoreSelectionUI: { selectedMeals: { [key: string]: boolean } } | undefined;
    ChooseDietType: undefined | { selectedMeals: { [key: string]: boolean } };
    GenerateMeals: undefined;
    MealOptions: undefined;
    Breakfast: { selectedMeals: { [key: string]: boolean } };
    Lunch: { selectedMeals: { [key: string]: boolean } };
    Dinner: { selectedMeals: { [key: string]: boolean } };
    MealPlan: any;
    ShoppingCart: any;
    HealthStat: any;
    MainTab: undefined;
    Recipe: undefined;
    RecipeSearchPage: undefined;
  };