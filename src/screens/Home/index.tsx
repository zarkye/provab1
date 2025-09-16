import { useState } from 'react';
import { styles } from './styles'
import {View, FlatList, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import Product from '../components/Product';

interface Produto {
    name: string,
}

export default function Home(){


    const [newProduct, setNewProduct] = useState("")
    const [products, setProducts] = useState<Produto[]>([])

    function handleOnAdd(){
        setProducts([...products, {name: newProduct}])
    }

    function handleOnRemove(name: string){
        setProducts(products.filter((item) => item.name !== name))
        setNewProduct("")
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
                    onChangeText={setNewProduct}
                    >
                </TextInput>
                <TouchableOpacity style={styles.addButton} onPress={handleOnAdd}>
                    <Text style={styles.titleText}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.pendindTasksText}>
                Tarefas Pendentes
            </Text>
            <FlatList
                data={products}
                renderItem={({item}) => 
                    <Product name={item.name} onRemove={() => handleOnRemove(item.name)}>
                    </Product>
                }
                keyExtractor={(item) => item.name}  
                showsVerticalScrollIndicator={false}
                scrollEnabled={products.length > 0}
                style={styles.list}
            />
        </View>
    );
}