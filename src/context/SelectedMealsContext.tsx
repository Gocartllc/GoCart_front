import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SelectedMealsType {
  Breakfast: boolean;
  Lunch: boolean;
  Dinner: boolean;
}

interface MealSetting {
  recipeCount: string;
  maxCalories: string;
  minCalories: string;
}

interface SelectedMealsContextType {
  selectedMeals: SelectedMealsType;
  setSelectedMeals: React.Dispatch<React.SetStateAction<SelectedMealsType>>;
  selectedStores: string[];
  setSelectedStores: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDiet: string;
  setSelectedDiet: React.Dispatch<React.SetStateAction<string>>;
  mealSettings: Record<string, MealSetting>;
  setMealSettings: React.Dispatch<React.SetStateAction<Record<string, MealSetting>>>;
  initialMealSelections: SelectedMealsType;
  setInitialMealSelections: React.Dispatch<React.SetStateAction<SelectedMealsType>>;
}

const SelectedMealsContext = createContext<SelectedMealsContextType | undefined>(undefined);

export const SelectedMealsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialMealSelections, setInitialMealSelections] = useState<SelectedMealsType>({
    Breakfast: false,
    Lunch: false,
    Dinner: false
  });

  const [selectedMeals, setSelectedMeals] = useState<SelectedMealsType>({ Breakfast: false, Lunch: false, Dinner: false });
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<string>('');
  const [mealSettings, setMealSettings] = useState<Record<string, MealSetting>>({});

  return (
    <SelectedMealsContext.Provider value={{ selectedMeals, setSelectedMeals, selectedStores, setSelectedStores, selectedDiet, setSelectedDiet, mealSettings, setMealSettings, initialMealSelections,
      setInitialMealSelections}}>
      {children}
    </SelectedMealsContext.Provider>
  );
};

export const useSelectedMeals = (): SelectedMealsContextType => {
  const context = useContext(SelectedMealsContext);
  if (!context) {
    throw new Error('useSelectedMeals must be used within a SelectedMealsProvider');
  }
  return context;
};