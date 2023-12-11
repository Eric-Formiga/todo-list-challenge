import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type HeaderProps = {
  task: string
  onChangeText: (task: string) => void
  onPress: () => void
}

export function Header({ task, onChangeText, onPress }: HeaderProps) {
  return <View style={styles.hearderContainer}>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma Nova Tarefa"
        placeholderTextColor={theme.colors.base.gray300}
        value={task}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialCommunityIcons name="plus-circle" size={22} color={theme.colors.base.gray100} />
      </TouchableOpacity>
    </View>
  </View>
}