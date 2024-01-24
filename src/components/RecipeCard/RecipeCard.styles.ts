import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        padding :10,
        marginHorizontal: 8,
        backgroundColor:'white',
        borderRadius :10,
        shadowColor:'#000',
        shadowOffset:{
          width :0,
          height :2,
        },
        shadowOpacity :0.25,
        shadowRadius :3.84,
        width:300,
        height:190,
        alignContent:'center',
        alignSelf:'center'
      },
      image: {
        width: '100%',
        height: 130,
        aspectRatio: 1, // Maintain the aspect ratio of the image
        borderRadius: 10, // Round the corners of the image
        alignSelf: 'center', // Center the image horizontally
      }, 
    time: {
      position: 'absolute',
      top: 10,
      left: 10,
      color: 'white',
      padding: 5,
      borderRadius: 5,
      fontSize: 14,
    },
    textContainer: {
      padding: 10,
    },
    dishName: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf:"center",
      color:"#353e4e"
    },
  });