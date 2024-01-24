import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { styles as defaultStyles } from './RecipeCard.styles';
import { RecipeCardProps } from './RecipeCard.types';

const RecipeCard: React.FC<RecipeCardProps> = ({
  dishName, timeEstimate, imagePath, onPress, cardWidth, cardHeight, cardPadding
}) => {
  const customStyles = StyleSheet.create({
    card: {
      ...defaultStyles.card,
      width: cardWidth || defaultStyles.card.width,
      padding: cardPadding || defaultStyles.card.padding,
      height: cardHeight || defaultStyles.card.height,
    }
  });

  return (
    <TouchableOpacity style={[customStyles.card]} onPress={onPress}>
      <Image source={imagePath} style={defaultStyles.image} />
      <Text style={defaultStyles.time}>{timeEstimate}</Text>
      <View style={defaultStyles.textContainer}>
        <Text style={defaultStyles.dishName}>{dishName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
