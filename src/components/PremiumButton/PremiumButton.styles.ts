import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    button: {
      width: 200,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });