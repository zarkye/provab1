import { useState } from 'react';
import { styles } from './styles'
import {View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native'

export default function Home(){

    const [newProduct, setNewProduct] = useState("")
    const [products, setProducts] = useState<String[]>([])

    function handleOnAdd(){

    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Lista de Tarefas</Text>
                <Text style={styles.titleDescription}>Adicione suas atividades a lista de tarefas</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Descrição da Tarefa'
                    placeholderTextColor={"#808080"}
                    value={newProduct}
                    >
                </TextInput>
                <TouchableOpacity style={styles.addButton} onPress={handleOnAdd}>
                    <Text style={styles.titleText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}