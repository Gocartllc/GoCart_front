import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
root: {
    flex: 1,
    backgroundColor:'#F1F6F7'
},
header: {
  alignItems: 'center',
  paddingTop: 60,
  paddingBottom: 17,
  color:'#E22E2'
},
userInfo: {
  flexDirection: 'row',
  paddingVertical: 18,
  color:'#E2E2E2'
},
section: {
  flex: 1,
  alignItems: 'center'
},
space: {
  marginBottom: 3,
  color:'#2E384D',
  fontWeight:"bold"
},
separator: {
  backgroundColor: "transparent",
  alignSelf: 'center',
  flexDirection: 'row',
  flex: 0,
  width: 35,
  height: 42,
justifyContent: "center",
alignItems: "center",
},
buttons: {
  flexDirection: 'row',
  paddingVertical: 50,
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 'bold', 
  borderRadius: 20
},
text: {
  paddingVertical: 20,
  fontSize: 25,
  fontWeight: 'bold',
  color:'#2E384D'
},
rating:{
  fontSize: 16,
  fontWeight: 'bold',
  color:'#E2E2E2',
  top:-21
},
sectionBackground: {
    padding: 10,
    margin: 10,
  },
  bar: {
    height: 2,
    backgroundColor: '#2dd881',
    marginVertical: 20,
  },
  list: {
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  listItemText: {
    marginLeft: 10,
    color: '#2E384D',
    fontSize:17
  },
  account: {
    fontSize: 20,
    borderRadius: 18,
    width: 120,
    left:-12,
    alignItems: "center",
    padding: 10
  },
})