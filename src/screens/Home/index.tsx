import { styles } from './styles'
import {View, FlatList, Text} from 'react-native'

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Lista de Tarefas</Text>
                <Text style={styles.titleDescription}>Adicione suas atividades a lista de tarefas</Text>
            </View>
        </View>
    );
}