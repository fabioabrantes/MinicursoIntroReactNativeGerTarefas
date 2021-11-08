import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerLeft:{
    width: '80%',
  },
  taskButton:{
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone:{
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskMarker:{
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRight:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '20%',
  },
  taskTextDone:{
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
  taskText:{
    color: '#666',
  }
});