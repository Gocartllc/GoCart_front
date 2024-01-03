// ShoppingCart.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Props } from './ShoppingCart.types';
import { styles } from './ShoppingCart.styles';

const ShoppingCart: React.FC<Props> = ({
  items = [], // default to an empty array if items is undefined
  onEdit,
  onRepeat,
  onPay,
}) => {
  // Calculate the total amount
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handlers with fallbacks for undefined functions
  const handleEdit = (index: number) => {
    if (onEdit) {
      onEdit(index);
    }
  };

  const handleRepeat = () => {
    if (onRepeat) {
      onRepeat();
    }
  };

  const handlePay = () => {
    if (onPay) {
      onPay();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My cart</Text>
      </View>

      {/* Items */}
      <View style={styles.items}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Image source={{ uri: 'placeholder-image-url' }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)} - {item.quantity} items</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEdit(index)}
            >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Repeat order */}
      <TouchableOpacity style={styles.repeatButton} onPress={handleRepeat}>
        <Text style={styles.repeatText}>Repeat previous order</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total amount</Text>
        <Text style={styles.amountText}>${total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCart;
