import React from 'react';

import {
  FlatList
} from 'react-native';

import { TaskItem } from '../TaskItem';

import { styles } from './styles';

export interface ITarefa{
  title:string;
  id: number;
  done:boolean;
}

interface Props{
  tasks:ITarefa[];
  removeTask: (id:number)=>void;
  changeTaskDone: (id:number)=>void;
}

export function TaskList({tasks,removeTask,changeTaskDone}:Props){
  return (
    <FlatList 
      data={tasks}
      keyExtractor={item=>String(item.id)}
      renderItem ={({item})=>{
        return (
          <TaskItem tarefa={item} remove={removeTask} changeDone={changeTaskDone}/>
        )
      }}
    />

  );
}