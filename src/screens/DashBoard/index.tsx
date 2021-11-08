import React,{useState} from 'react';
import {
  Alert,
  StatusBar,
  View
} from 'react-native';

import {Header} from '../../components/Header';
import {InputText} from '../../components/InputText';
import {TaskList,ITarefa} from '../../components/TaskList';

import { styles } from './styles';


export function DashBoard(){
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  function addTarefas(newTaskParams:string){
    // criar uma tarefa
    const newTask ={
      title:newTaskParams,
      id: new Date().getTime(),
      done:false,
    }
    // verificar se essa tarefa ja foi adicionada
    const taskFound = tarefas.find(task =>task.title ===newTaskParams);
    if(taskFound){
      Alert.alert('Tarefa inválida', 'ja existe essa tarefa adicionada')
    }else{
      setTarefas([...tarefas,newTask]);
      console.log(tarefas);
    }
  }

  function handleRemoveTarefa(id:number){
    Alert.alert(
      "Remover tarefa", 
      "Tem certeza que deseja remover essa tarefa?",
      [
        {
          text:'Sim',
          onPress: ()=>{
            const tasksRest = tarefas.filter(tarefa => tarefa.id !== id);
            setTarefas(tasksRest);
          }
        },
        {
          text:'não',
          onPress:()=>{return;}
        }
      ]
      
    )

  }

  function handleChangeTaskDone(id:number){
    const copiaTasks = tarefas.map(tarefa=>({...tarefa}));
    const indexTarefaEncontrada = copiaTasks.findIndex(tarefa=>tarefa.id ===id);

    if(indexTarefaEncontrada !== -1){
      if(!copiaTasks[indexTarefaEncontrada].done){
        copiaTasks[indexTarefaEncontrada].done = true;
      }else{
        copiaTasks[indexTarefaEncontrada].done = false;
      }
      setTarefas(copiaTasks);
    }else{
      return; // sair da função
    }
  }

  return (
    <View style={styles.container}>
       <StatusBar 
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent" 
      />
     <Header count={tarefas.length} />
     <InputText addTask={addTarefas}/>
     <TaskList tasks={tarefas} removeTask ={handleRemoveTarefa} changeTaskDone={handleChangeTaskDone}/>

    </View>
  );
}