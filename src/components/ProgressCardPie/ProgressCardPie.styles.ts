import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card:{
    padding :20,
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
  },
  title:{
    fontSize :18,
    fontWeight :'bold'
},
  value:{
    fontSize :24,
    fontWeight :'bold'
},
  goal: {
    fontSize: 14,
    color: 'grey'
  }
});
  
