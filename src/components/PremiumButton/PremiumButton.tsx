import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonVariant, ColorVariant } from '../Button/Button.types';
import { PremiumButtonProps } from './PremiumButton.types';
import { styles } from './PremiumButton.styles';



const PremiumButton: React.FC<PremiumButtonProps> = ({ title, onPress, color, textcolor, btnheight, btnwidth, btnborderradius, contentTextStyle}) => {
  return (
    <TouchableOpacity
    style={
      [
      styles.button, 
      { backgroundColor: color, width: btnwidth || 200, height: btnheight || 50, borderRadius: btnborderradius || 25,  },
      contentTextStyle
    ]
  }
      onPress={onPress}
    >
      <Text style={[styles.text,{color: textcolor}]}>{title}</Text>
    </TouchableOpacity>
  );
};



export default PremiumButton;
