import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Circle, Text as SVGText, Path } from 'react-native-svg';
import {styles} from './StartButton.styles'
import { StartButtonProps } from './StartButton.types';

const StartButton : React.FC<StartButtonProps> = ({title, onPress}) => {
  
  return (
    <View>
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Svg height="200" width="200" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="grad" x1="20%" y1="0%" x2="130%" y2="0%">
            <Stop offset="0" stopColor="#4f5d75" />
            <Stop offset="1" stopColor="#2dd881" />
          </LinearGradient>
          <Path id="circlePath" d="M50,15 a35,35 0 1,1 0,70 a35,35 0 1,1 0,-70" />
        </Defs>
        {/* Outer Ring */}
        <Circle cx="50" cy="50" r="45" fill="none" stroke="#2dd881" strokeWidth="7" />
        {/* Inner Ring */}
        <Circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="7" />
        {/* Text along the Path */}
       <SVGText
            fill="#4f5d75"
            fontSize="12"
            fontWeight="bold"
            x="50"
            y="50"
            textAnchor="middle"
            dy="0.35em"
          >
            {title}
          </SVGText>
      </Svg>
    </TouchableOpacity>
    </View>
  );
};


export default StartButton;