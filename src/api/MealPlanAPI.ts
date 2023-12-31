import { MealPlanRequest } from './MealPlanAPI.types'


const generateMealPlan = async (mealPlanData: MealPlanRequest) => {
    try {
        const response = await fetch('http://localhost:8000/generate_meal_plan/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealPlanData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error generating meal plan:', error);
        throw error;
    }
};

export { generateMealPlan };

