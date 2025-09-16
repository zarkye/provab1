import { useState } from 'react';
import { styles } from './styles'
import {View, FlatList, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native'
import Product from '../components/Product';

interface Tarefa {
    name: string,
}

export default function Home(){


    const [newProduct, setNewProduct] = useState("")
    const [products, setProducts] = useState<Tarefa[]>([])

    function emptyList(){
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>Realizou todas as tarefas? Adicione tarefas a sua lista de pendências.</Text>
            </View>
        )
    }

    function handleOnAdd(){
        if(newProduct.trim() === ""){
            return Alert.alert("Nome da tarefa inválida")
        }else if(products.some(p => p.name === newProduct)){
            return Alert.alert("Tarefa já Existe")
        }
        setProducts([...products, {name: newProduct}])
        setNewProduct("")
    }

    function handleOnRemove(name: string){
        return Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setProducts(products.filter((item) => item.name !== name))
            },
            {
                text: "Não",
            }
        ])
        
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
                    <Image
                        source={require('../../../assets/add.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.pendindTasksText}>
                Tarefas Pendentes
            </Text>
            <View>
                <FlatList
                data={products}
                renderItem={({item}) => 
                    <Product name={item.name} onRemove={() => handleOnRemove(item.name)}></Product>
                }
                keyExtractor={(item) => item.name}  
                ListEmptyComponent={emptyList}
                scrollEnabled={products.length > 0}
                showsVerticalScrollIndicator={false}
            />
            </View>
        </View>
    );
}