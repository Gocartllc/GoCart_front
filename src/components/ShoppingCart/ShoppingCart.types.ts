// ShoppingCart.types.ts

    export interface Props {
    items?: { name: string; price: number; quantity: number }[];
    onEdit?: (index: number) => void;
    onRepeat?: () => void;
    onPay?: () => void;
  }
  
