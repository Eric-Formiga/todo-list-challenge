import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../components/Header/Header'
import { Task } from '../components/Task/Task'
import { useState } from 'react'
import { TaskDTO } from '../dtos/TaskDto'
import { Empty } from '../components/Empty/Empty'
import { uuid } from '../utls/uuid'

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])
  const [newTask, setNewTask] = useState('')

  function handleTaskAdd(){
    if(newTask !== '' && newTask.length >= 5){
      setTasks((tasks)=> [...tasks, {id: uuid(), isCompleted: false, title: newTask.trim()}])
    }
   setNewTask('')
  }
  return (
    <View style={styles.container} >
      <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd}/>
      <View style={styles.tasksContainer}>

        <FlatList
        data={tasks}
        keyExtractor={(tasks)=> tasks.id!}
        renderItem={({item}) =>  
        <Task key={item.id} 
          title={item.title} 
          isCompleted={item.isCompleted}
           />}
           ListEmptyComponent={<Empty/>}
        />

      </View>
    </View>
  )
}




