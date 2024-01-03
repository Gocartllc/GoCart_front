// ShoppingCart.types.ts
import { TabNavigationProp } from '@navigation/navigationBottomTypes'; // Adjust the import path as needed

    export interface Props {
    items?: { name: string; price: number; quantity: number }[];
    onEdit?: (index: number) => void;
    onRepeat?: () => void;
    onPay?: () => void;
    navigation: TabNavigationProp<'Shopping'>;
  }