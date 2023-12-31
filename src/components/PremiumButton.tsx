import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonVariant, ColorVariant } from './Button/Button.types';

// Define a type for your component's props
type PremiumButtonProps = {
  title: string;
  onPress: () => void;
  color: string;
  contentTextStyle?: StyleProp<TextStyle>;
};

const PremiumButton: React.FC<PremiumButtonProps> = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PremiumButton;
