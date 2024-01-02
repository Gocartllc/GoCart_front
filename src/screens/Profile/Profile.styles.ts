import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
root: {
    flex: 1,
    backgroundColor:'#0E0D0D'
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
  color:'#E2E2E2'
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
  color:'#E2E2E2'
},
rating:{
  fontSize: 16,
  fontWeight: 'bold',
  color:'#E2E2E2',
  top:-21
},
sectionBackground: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    margin: 10,
  },
  bar: {
    height: 2,
    backgroundColor: '#0B99C1',
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
    color: '#E2E2E2',
    fontSize:17
  },
  account: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 18,
    width: 120,
    left:-12,
    alignItems: "center",
    backgroundColor: "#0B99C1",
    padding: 10
  },
})