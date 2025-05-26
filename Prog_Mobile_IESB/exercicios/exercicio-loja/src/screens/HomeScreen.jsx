import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Text, Card, Avatar, Button, Divider } from "react-native-paper";

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
        <View>
            <FlatList 
                data={produtos}
                renderItem={({item}) => (
                    <Card>
                        <Card.Title title={item}
                        right={() => <Button onPress={() => navigation.navigate('ListaProdutosScreen', item)}>Descobrir</Button>}
                        />
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
