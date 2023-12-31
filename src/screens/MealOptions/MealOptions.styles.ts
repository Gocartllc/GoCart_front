// src/screens/MealOptionsScreen/MealOptionsScreen.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    top:50,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10, // Adjust this value as needed
    width: '70%',
    alignSelf: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    width: 100, // Set a fixed width for the checkbox label
  },
  button: {
    marginTop: 20,
  },
});
