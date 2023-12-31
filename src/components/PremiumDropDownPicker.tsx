import React, { SetStateAction, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker, { DropDownDirectionType, DropDownPickerProps } from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ValueType = string;

type PremiumDropDownPickerProps<T> = {
  dropDownDirection?: DropDownDirectionType;
  open: boolean;
  multiple?: boolean;
  items: Array<{ label: string; value: ValueType }>;
  value: T[] | null | string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<SetStateAction<string | string[]>>
  
  setItems: React.Dispatch<React.SetStateAction<Array<{ label: string; value: ValueType }>>>;
  icon: string;
};

const PremiumDropDownPicker: React.FC<PremiumDropDownPickerProps<string>> = ({
  dropDownDirection,
  open,
  multiple = false, // Provide a default value for multiple
  items,
  value,
  setOpen,
  setValue,
  setItems,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        name={icon}
        size={24}
        color={isFocused ? '#f4511e' : '#aaa'}
        style={styles.icon}
      />
      <DropDownPicker
        dropDownDirection={dropDownDirection}
        open={open}
        multiple={true}
        items={items}
        value={value}
        containerStyle={styles.pickerContainer}
        setOpen={setOpen}
        style={styles.picker}
        textStyle={styles.textStyle}
        labelStyle={styles.labelStyle}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        dropDownContainerStyle={styles.dropDownContainer}
        tickIconStyle={styles.tickIcon as any} 
        arrowIconStyle={styles.arrowIcon as any}
        placeholderStyle={styles.placeholder}
        />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  width: 300,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#fff',
  flexDirection: 'row',
  alignItems: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  margin: 10,
},
icon: {
  marginLeft: 20,
},
pickerContainer: {
  height: 50,
  width: 260,
  marginBottom: 0,
},
picker: {
  width: 260,
  height: 50,
  marginBottom: 0,
  backgroundColor: 'transparent',
  borderWidth: 0,
},
textStyle: {
  fontSize: 18,
  color: '#000',
},
labelStyle: {
  fontSize: 18,
  color: '#000',
},
dropDownContainer: {
  width: 260,
  borderRadius: 25,
  backgroundColor: '#fff',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
tickIcon: {
  tintColor: '#f4511e',
},
arrowIcon: {
  tintColor: '#f4511e',
},
placeholder: {
  color: '#aaa',
},
});

export default PremiumDropDownPicker;