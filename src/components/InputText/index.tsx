import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Alert,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';

interface Props{
  addTask:(task:string)=>void;
}

export function InputText({addTask}:Props){
  const [tarefa, setTarefa]= useState('');

  function handleAddNewTask(){
    if(tarefa === ''){
       Alert.alert(
         'Tarefa Inválida', 
         'o nome não pode ser vaizo, por favor digiete a tarefa'
         );
    }else{
      addTask(tarefa);
      setTarefa('');
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#b2b2b2"
        value={tarefa}
        onChangeText={text=>setTarefa(text)}
        onSubmitEditing={handleAddNewTask}
        selectionColor="#000"
      />
      <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Feather name="chevron-right" size={24} color="#b2b2b2"/>
      </TouchableOpacity>
    </View>
  );
}