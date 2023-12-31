
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 6,
    padding: 25,
    backgroundColor: '#FFF', // Consider your theme colors
  },
  header: {
    marginTop:10,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  dropDownContainer: {
    width: 340,
    borderRadius: 25,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
  tickIcon: {
    tintColor: '#f4511e',
  },
  arrowIcon: {
    tintColor: '#f4511e',
  },
  placeholder: {
    color: '#aaa',
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
  backgroundimg: {
    width: 300,
    height: 300,
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:65,
    marginBottom:56
  }
});
