import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:"#fff",
    borderRadius:5,
    flexDirection:'row',
    alignItems: 'center',
    marginTop:-28,
    marginHorizontal:24,
  },
  inputText:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:20,
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5,
    borderRightWidth:1,
    borderRightColor:'#ebebeb',
    color:'#666',
    height:56,
  },
  addButton:{
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      borderTopRightRadius:5,
      borderBottomRightRadius:5
  },
});