import React from 'react';
import {Feather,Ionicons} from '@expo/vector-icons';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ITarefa } from '../TaskList';

import { styles } from './styles';

interface Props{
  tarefa:ITarefa;
  remove: (id:number)=>void;
  changeDone:(id:number)=>void;
}

export function TaskItem({tarefa,remove,changeDone}:Props){
  return (
    <View style={styles.container}>
       <View style={styles.containerLeft}>
         <TouchableOpacity
            activeOpacity={0.7}
            style={styles.taskButton}
            onPress={()=>changeDone(tarefa.id)}
         >
          <View style={tarefa.done? styles.taskMarkerDone : styles.taskMarker}>
            {
              tarefa.done && (
                <Feather name="check" size={12} color="#fff" />
              )
            }
          </View>

          <Text
            style={tarefa.done? styles.taskTextDone : styles.taskText}
          >
            {tarefa.title}
          </Text>
         </TouchableOpacity>
       </View>

       <View style={styles.containerRight}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{paddingHorizontal:24}}
            onPress={()=>remove(tarefa.id)}
          >
           <Ionicons name="md-trash" size={24} color="#666" />
          </TouchableOpacity>
       </View>
    </View>
  );
}