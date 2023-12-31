import React, {useCallback, useMemo, useState} from 'react';
import DatePickerComponent from 'react-native-date-picker';

import {StyledButton} from './DatePicker.styles';
import {IDatePickerProps} from './DatePicker.types';

const DatePicker: React.FC<IDatePickerProps> = ({
  value: valueFromProps,
  onChange: onChangeFromProps,
  style,
}) => {
  const [valueFromState, setValue] = useState(() =>
    valueFromProps ? new Date(valueFromProps) : new Date(),
  );
  const [showPicker, setShowPicker] = useState(false);

  const isControlled = !!valueFromProps && !!onChangeFromProps;
  const value = isControlled ? valueFromProps : valueFromState;
  const valueAsDate = useMemo(() => new Date(value), [value]);

  const displayDate = useMemo(
    () => valueAsDate.toLocaleDateString('en-US'),
    [valueAsDate],
  );

  const openPicker = useCallback(() => {
    setShowPicker(true);
  }, []);

  const closePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  const onChange = useCallback(
    (date: Date) => {
      closePicker();
      setValue(date);

      if (onChangeFromProps) {
        onChangeFromProps(date);
      }
    },
    [closePicker, onChangeFromProps],
  );

  return (
    <>
      <StyledButton
        style={style}
        onPress={openPicker}
        contentTextStyle={{textAlign: 'center', color: '#BeBeBe'}}>
        {displayDate}
      </StyledButton>
      <DatePickerComponent
        modal
        mode="date"
        open={showPicker}
        date={valueAsDate}
        onConfirm={onChange}
        onCancel={closePicker}
      />
    </>
  );
};

export default DatePicker;
