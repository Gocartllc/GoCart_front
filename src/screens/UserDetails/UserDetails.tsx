import React, { useState } from 'react';
import { View, Button, Alert, Switch, Text, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';
import PremiumTextField from '@components/PremiumTextField';
import apiconfig from 'api-config'; // Ensure this is the correct path to your API configuration
import { getKeychainValue } from '@components/KeychainStore';
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import { UserDetailsTypeProps } from './UserDetails.types';



const UserDetailsScreen: React.FC<UserDetailsTypeProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [is18OrOlder, setIs18OrOlder] = useState(false);

  const calculateAge = (birthday: string | number | Date) => {
    const birthdayDate = new Date(birthday);
    const ageDifMs = Date.now() - birthdayDate.getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleAgreePress = async () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthday)) {
      Alert.alert('Invalid birthday format', 'Please enter your birthday in YYYY-MM-DD format.');
      return;
    }

    const age = calculateAge(birthday);
    if (age < 18) {
      setIs18OrOlder(false);
      Alert.alert('Age Restriction', 'You must be at least 18 years old.');
      return;
    }

    if (!agreed) {
      Alert.alert('Terms Agreement Required', 'You must agree to the terms of service and privacy policy.');
      return;
    }

    try {
      const keychainData = await getKeychainValue();
      if (keychainData && keychainData.idToken) {
        // Decode the JWT to extract the user ID
        const decodedToken = jwtDecode(keychainData.idToken);
        const userId = decodedToken.sub; // 'sub' is the subject or user ID in a standard JWT
  
        const response = await fetch(`${apiconfig.apiurl}/update-user-metadata`, {
          method: 'PATCH', // Use PATCH method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId, // Use the extracted user ID
            name: fullName,
            age: age,
            agree_terms: agreed,
            is_18_or_older: is18OrOlder,
          }),
        });
  
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${await response.text()}`);
        }
  
        Alert.alert('Success', 'User metadata updated successfully');
        navigation.navigate('MainTab');
      } else {
        Alert.alert('Error', 'Failed to retrieve token data');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error updating user metadata:', error);
        Alert.alert('Error updating user metadata:', error.message);
      } else {
        console.error('An unexpected error occurred');
        Alert.alert('An unexpected error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Profile Info</Text>
      </View>

      <Text style={styles.question}>Full Name</Text>
      <PremiumTextField
        placeholder="Full Name"
        iconName="account-details"
        secureTextEntry={false}
        onChangeText={setFullName}
        value={fullName}
      />

      <Text style={styles.question}>Birthday (YYYY-MM-DD)</Text>
      <PremiumTextField
        placeholder="Birthday (YYYY-MM-DD)"
        iconName="calendar"
        secureTextEntry={false}
        onChangeText={setBirthday}
        value={birthday}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.question}>Are you 18 years or older?</Text>
        <Switch
          value={is18OrOlder}
          onValueChange={setIs18OrOlder}
        />
      </View>

      <CheckBox
        title="I agree to the terms of service and privacy policy"
        checked={agreed}
        onPress={() => setAgreed(!agreed)}
      />

      <Button title="Agree" onPress={handleAgreePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:70,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default UserDetailsScreen;
