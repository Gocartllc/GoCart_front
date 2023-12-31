import {ButtonVariant, ColorVariant} from './Button.types';

export const BUTTON_VARAINT_CONFIG: {
  [key in ColorVariant]: {
    [key in ButtonVariant]: {
      color: string;
      bgColor: string;
      borderColor: string;
    };
  };
} = {
  primary: {
    primary: {
      color: '#000',
      bgColor: '#fff',
      borderColor: '#fff',
    },
    secondary: {
      color: '#fff',
      bgColor: 'transparent',
      borderColor: '#fff',
    },
    ghost: {
      color: '#fff',
      bgColor: 'transparent',
      borderColor: 'transparent',
    },
  },
};

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = 'primary';

export const DEFAULT_COLOR_VARIANT: ColorVariant = 'primary';
