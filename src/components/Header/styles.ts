import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#525252',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row',
    paddingTop:30,
    paddingHorizontal:24,
    paddingBottom:60
  },
  viewTasks:{
    flexDirection:'row',
    alignItems: 'center',
  },
  txtTasksNormal:{
    fontSize:15,
    color:'#FFFFFF',

  },
  txtTasksBold:{
    fontSize:15,
    color:'#FFFFFF',
    paddingLeft:5,
    fontWeight:'bold',
  }
});