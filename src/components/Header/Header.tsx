import { View,Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Header() {
  return <View style={styles.hearderContainer}>
   <View style={styles.form}>
    <TextInput style={styles.input} placeholder="Adicione uma Nova Tarefa" placeholderTextColor={theme.colors.base.gray300}/>
    <TouchableOpacity style={styles.button}>
      <MaterialCommunityIcons name="plus-circle" size={22} color={theme.colors.base.gray100} />
    </TouchableOpacity>
   </View>
  </View>
}