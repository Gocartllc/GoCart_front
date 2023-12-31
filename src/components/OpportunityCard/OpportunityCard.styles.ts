import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    opportunitiesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: 10,
    },
    opportunityCard: {
      backgroundColor: '#2dd881',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
     
      width: '48%',      
      margin: '1%',
      marginVertical: 8,
      shadowColor: 'black', // Shadow for a subtle depth effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.32,
    shadowRadius: 2.25,
    elevation: 3,
    },
    opportunityIcon: {
      marginBottom: 5,
    },
    opportunityTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    opportunityValue: {
      fontSize: 15,
      marginVertical: 5,
      color: "#fff"
    },
    opportunityTrend: {
      fontSize: 14,
      fontWeight: '600',
    },
    trendUp: {
      color: 'green',
    },
    trendDown: {
      color: 'red',
    }
  });