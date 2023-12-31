import {TouchableOpacityProps, StyleProp, TextStyle} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ColorVariant = 'primary';

export interface IStyledButtonProps {
  $variant: ButtonVariant;
  $colorVariant: ColorVariant;
}

export interface IButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  colorVariant?: ColorVariant;
  contentTextStyle?: StyleProp<TextStyle>;
}
