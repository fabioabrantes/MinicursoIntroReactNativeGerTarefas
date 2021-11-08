import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#525252',
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    marginBottom:100,

    height:150,
    width: 275,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFFFFF',
    marginBottom:36,
  },
  description:{
    fontSize:18,
    color:'#FFFFFF',
    textAlign:'center',
    lineHeight:25,
  },
  btnToDo:{
    backgroundColor:'#8257e5',
    width:275,
    alignItems:'center',
    padding: 20,
    borderRadius:8,
  },
  textBtnToDo:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFFFFF',
  }

});
