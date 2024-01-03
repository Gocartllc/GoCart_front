import React from 'react';
import ShoppingCart from '@components/ShoppingCart';
import { sampleItems } from './sampleData';

const Shopping: React.FC = () => {
  // Mock functions for handlers
  const mockEdit = (index: number) => console.log(`Edit item at index: ${index}`);
  const mockRepeat = () => console.log('Repeat order');
  const mockPay = () => console.log('Proceed to payment');

  return (
    <ShoppingCart
      items={sampleItems}
      onEdit={mockEdit}
      onRepeat={mockRepeat}
      onPay={mockPay}
    />
  );
};

export default Shopping;
