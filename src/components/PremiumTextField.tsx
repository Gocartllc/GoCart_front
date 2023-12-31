import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing MaterialIcons

type PremiumTextFieldProps = {
    placeholder: string;
    iconName: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
};

const PremiumTextField: React.FC<PremiumTextFieldProps> = ({ placeholder, iconName, secureTextEntry = false, value, onChangeText, }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="numeric"
        size={24}
        color={isFocused ? '#f4511e' : '#aaa'}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 10,
    marginBottom: 30, // Add some bottom margin

  },
  icon: {
    marginLeft: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 18,
    color: '#000',
  },
});

export default PremiumTextField;
