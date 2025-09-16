import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

interface Props{
    name: string,
    onRemove: () => void
}


export default function Product(props: Props){
    return (
        <View style={styles.container}>
            <View style={styles.productText}>
                <Text>{props.name}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={props.onRemove}>
                <Image
                    source={require('../../../assets/delete.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 345,
        height: 44,
        flexDirection: "row",
        marginBottom: 8,
        
    },
    productText: {
        width: 301,
        backgroundColor: "#F2F2F2",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 12
    },
    removeButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#E23C44"
    }
})