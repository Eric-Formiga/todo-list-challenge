import { Alert, FlatList, Text, View } from 'react-native'
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

  function handleTaskAdd() {
    if (newTask !== '' && newTask.length >= 5) {
      setTasks((tasks) => [...tasks, { id: uuid(), isCompleted: false, title: newTask.trim() }])
    }
    setNewTask('')
  }

  function handleTaskDone(id: string) {
  setTasks((tasks) => 
  tasks.map((task)=> {
    task.id === id ? (task.isCompleted = !task.isCompleted) : null
    return task})
    )
  }

  function handleTaskDeleted(id: string){

    Alert.alert('Excluir tarefa', 'Deseja Excluir tarefa',[
      {
        text: 'Sim',
        style: 'default',
        onPress: ()=>
        setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  
  }

  return (
    <View style={styles.container} >
      <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd} />
      <View style={styles.tasksContainer}>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task key={item.id}
              onTaskDone={()=> handleTaskDone(item.id)}
              onTaskDeleted={()=> handleTaskDeleted(item.id)}
              {...item}
            />)}
          ListEmptyComponent={<Empty />}
        />

      </View>
    </View>
  )
}




