import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function Home(){
 const navigation = useNavigation();

 function handleGoToDashBoard(){
  navigation.navigate('DashBoard');
 }
 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Gerenciador de tarefas</Text>

        <Text style={styles.description}>
          Seu aplicativo {'\n'}
          favorito de afarezes
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnToDo}
        onPress={handleGoToDashBoard}
        activeOpacity={0.7}
      >
        <Text style={styles.textBtnToDo}>Gerenciar tarefas</Text>
      </TouchableOpacity>
    </View>
  );
}