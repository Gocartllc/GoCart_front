import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    paddingTop:180,
    marginBottom: 16,
  },
  badgeIcon: {
    width: 90,
    height: 90,
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
      paddingTop:65
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    cartIcon: {
      width: 24,
      height: 24,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    foodImage: {
      width: '48%',
      height: 100,
      borderRadius: 8,
    },
    foodName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginBottom: 16,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    buyButton: {
      backgroundColor: '#f04',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 32,
      alignSelf: 'center',
    },
    buyButtonText: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
  });