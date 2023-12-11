import { Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../components/Header/Header'
import { Task } from '../components/Task/Task'

export function HomeScreen() {
  return (
    <View style={
      styles.container
    } >
      <Header />
      <View style={styles.tasksContainer}>
        <Task />
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  )
}




