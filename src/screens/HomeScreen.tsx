import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../components/Header/Header'
import { Task } from '../components/Task/Task'
import { useState } from 'react'
import { TaskDTO } from '../dtos/TaskDto'
import { Empty } from '../components/Empty/Empty'

export function HomeScreen() {
  const [tasks, settasks] = useState<TaskDTO[]>([
  ])
  return (
    <View style={styles.container} >
      <Header />
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




