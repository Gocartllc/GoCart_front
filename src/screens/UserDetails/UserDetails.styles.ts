// src/screens/StoreSelectionUI/StoreSelectionUI.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    question: {
      fontSize: 18,
      marginVertical: 10,
    },
    discoverMoreTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2E384D',
      alignSelf: 'flex-start',
      marginLeft: 15,
      marginTop: 30,
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
      marginVertical: 10,
    },

    logo: {
      width: 50,
      height: 50,
      marginBottom: 5,
    }
  });