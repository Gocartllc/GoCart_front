import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    shadowEffect: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // for Android
      },
    title:{
        fontSize :40,
        fontWeight :'bold',
        alignSelf:"center",
        color:"#4f5d75",
        paddingBottom:15
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 13,
      paddingTop:60
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
      width:250,
      alignContent:"center",
      alignSelf:"center",
      textAlignVertical:"center",
      paddingBottom:15
    },
    searchInput: {
      flex: 1,
      borderRadius: 5,
      width:4,
      padding: 7,
      paddingBottom:10,
      backgroundColor: '#fff', // Ensure background color is set
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 5
    },
    searchButton: {
      backgroundColor: "#00a000",
      borderRadius: 5,
      padding: 10,
      marginLeft: 10,
    },
    searchButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    filterButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    filterButton: {
      backgroundColor: "#00a000",
      borderRadius: 5,
      padding: 10,
      width: "30%",
    },
    filterButtonText: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
    },
    recipeList: {
      flex: 1,
    },
    card: {
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 10, // Add horizontal margin
        backgroundColor: '#fff', // Ensure background color is set
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // For Android
      },
    cardImage: {
      width: 100,
      height: 100,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    cardInfo: {
      flex: 1,
      padding: 10,
    },
    cardName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    cardTime: {
      color: "#888",
      fontSize: 14,
    },
    cardCalories: {
      color: "#888",
      fontSize: 14,
    },
    cardRating: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      top: 10,
      right: 10,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 5,
    },
    cardRatingText: {
      color: "#00a000",
      fontWeight: "bold",
      fontSize: 14,
    },
    cardLikes: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
      right: 10,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 5,
    },
    cardLikesText: {
      color: "#00a000",
      fontWeight: "bold",
      fontSize: 14,
    },
  });