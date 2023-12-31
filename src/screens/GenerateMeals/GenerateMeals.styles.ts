// src/screens/SubmitPage/SubmitPage.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // A light background color
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', // Dark text for contrast
    marginBottom: 30,
    marginTop:70
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 9,
  },
  content: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    paddingLeft: 20, // Indent content for better readability
  },
  section: {
    marginBottom: 50,
    backgroundColor: '#fff', // White background for each section
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000', // Shadow for a subtle depth effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff', // A distinct color for the primary action
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
