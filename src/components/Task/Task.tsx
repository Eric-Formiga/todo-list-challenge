import { Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../theme'


export function Task() {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity>
      <MaterialCommunityIcons name="check-decagram-outline" size={22} color={theme.colors.brand.purple} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.textDone}>Estudar Javascript</Text>
      </View>
      <TouchableOpacity>
      <MaterialCommunityIcons name="trash-can-outline" size={20} color={theme.colors.base.gray300} />
      </TouchableOpacity>
    </View>
  )
}