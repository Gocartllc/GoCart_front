
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFF', // Consider your theme colors
  },
  header: {
    marginTop:60,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  pickerContainer: {
    height: 40,
    width: '100%',
    marginBottom: 30
    },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  textStyle: {
    // Styles for the text inside the picker
  },
  labelStyle: {
    // Styles for the label of each item in the picker
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
