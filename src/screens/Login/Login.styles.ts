import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerlocal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      headerlocal: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      errorlocal: {
        margin: 20,
        textAlign: 'center',
        color: '#D8000C'
      },
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: 30,
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 10 }, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 20, // Shadow blur radius
        elevation: 20, // Elevation for Android
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      shadowText: {
        color: '#2dd881',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.95)', 
        textShadowOffset: { width: 0, height: 0 }, 
        textShadowRadius: 1000
      },
     buttonContainer: {
        marginVertical: 5,
      },
     button:{
       marginVertical :5
     }
  });
