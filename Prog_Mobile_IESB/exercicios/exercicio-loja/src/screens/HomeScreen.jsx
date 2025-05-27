import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Text, Card, Avatar, IconButton, Divider } from "react-native-paper";

export default function HomeScreen({navigation, route}) {

     const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/category-list")
            .then((res) => {
                
                setProdutos(res.data)
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <View style={styles.container}>
            <FlatList 
                data={produtos}
                renderItem={({item}) => (
                    <Card style={styles.card}>
                        <Card.Title title={item.charAt(0).toUpperCase() + item.slice(1)}
                        right={() => <IconButton onPress={() => navigation.navigate('ListaProdutosScreen', item)} icon={'chevron-right-circle-outline'}/>}
                        />
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#413A36"
    },
    card:{
        margin: 15,
        marginBottom: 5,
        backgroundColor: '#EB6'
    }
});
