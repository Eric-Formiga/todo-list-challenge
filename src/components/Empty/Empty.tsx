import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

export function Empty() {
  return <View style={styles.emptyContainer}>
    <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
    <Text style={[styles.textBold, styles.textRegular]}>Crie suas Tarefas</Text>
  </View>
}