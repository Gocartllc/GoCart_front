import {StyleProp, ViewStyle} from 'react-native';

type DatePickerValue = Date | string;

export interface IDatePickerProps {
  value?: DatePickerValue;
  onChange?: (value: DatePickerValue) => void;
  style?: StyleProp<ViewStyle>;
}
