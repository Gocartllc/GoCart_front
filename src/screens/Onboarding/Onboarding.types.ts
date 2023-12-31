import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator'; // Adjust the import path as needed

// Onboarding.types.ts
export interface OnboardingProps {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
}

