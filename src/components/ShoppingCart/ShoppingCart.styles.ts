import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1F6F7',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop:70,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    backButton: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: '#f0f0f0',
    },
    backText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    title: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    items: {
      flex: 1,
      padding: 16,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    itemName: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    itemPrice: {
      flex: 1,
      fontSize: 16,
      color: '#333',
      textAlign: 'left',
    },
    editButton: {
      width: 64,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: '#f0f0f0',
      marginLeft: 8,
    },
    editText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },
    repeatButton: {
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
      backgroundColor: '#f0f0f0',
      marginHorizontal: 16,
      marginBottom: 16,
    },
    repeatText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    totalText: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    amountText: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'right',
    },
    payButton: {
      width: 96,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
      backgroundColor: '#f0f0f0',
      marginLeft: 8,
    },
    payText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    itemDetails: {
      flex: 1,
      marginLeft: 8,
    },
    itemImage: {
      width: 55, // adjust size as needed
      height: 55, // adjust size as needed
      borderRadius: 25,
      backgroundColor: '#f0f0f0', // placeholder background color
    }
  });
  
  