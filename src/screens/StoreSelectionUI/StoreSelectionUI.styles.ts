// src/screens/StoreSelectionUI/StoreSelectionUI.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    storeTile: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      width: '30%', // each tile is approximately 1/3 of the screen width
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      elevation: 1, // for Android shadow
      shadowColor: '#000', // for iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    logo: {
      width: 50,
      height: 50,
      marginBottom: 5,
    },
    storeName: {
      fontSize: 16,
    },
    checkIcon: {
      position: 'absolute',
      top: 5,
      right: 5,
      fontSize: 20,
      color: 'green',
    },
    nextButton: {
      backgroundColor: '#007bff',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      marginVertical: 10,
    },
    nextButtonText: {
      color: '#fff',
      fontSize: 18,
    },
    heading: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 90,
      top:-45,
      color: '#353e4e',
    }
  });