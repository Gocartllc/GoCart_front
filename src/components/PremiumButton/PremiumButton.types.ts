import {TouchableOpacityProps, StyleProp, TextStyle} from 'react-native';



export type PremiumButtonProps = {
    title: string;
    textcolor?: string;
    onPress: () => void;
    color: string;
    contentTextStyle?: StyleProp<TextStyle>;
    btnwidth?: number;
    btnheight?:number;
    btnborderradius?:number;
  };