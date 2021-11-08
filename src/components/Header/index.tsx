import React from 'react';

import logoImg from '../../assets/logo/logo.png';

import {
  Image,
  Text,
  View
} from 'react-native';

import { styles } from './styles';

interface IProps{
  count:number;
}
export function Header({count}:IProps){

  const texto = (count === 1) ? 'tarefa' : 'tarefas';
  
  return (
    <View style={styles.container}>
      <Image source={logoImg}/>
      <View style={styles.viewTasks}>
        <Text style ={styles.txtTasksNormal}>Você tem</Text>

        <Text style ={styles.txtTasksBold}>{count} {texto}</Text>
      </View>
    </View>
  );
}