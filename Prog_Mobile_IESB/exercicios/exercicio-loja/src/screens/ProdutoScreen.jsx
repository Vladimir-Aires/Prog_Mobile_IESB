import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Text, Divider } from "react-native-paper";
import axios from "axios";

export default function ProdutoScreen({ navigation, route }) {
    const [infoProduto, setInfoProduto] = useState("");
    const produto = route.params;
    const comentarios = infoProduto["reviews"];
    

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${produto}`)
            .then((resposta) => {
                setInfoProduto(resposta.data);
                
            })
            .catch((erro) => alert("Erro ao buscar usuário!"));
    }, []);

    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover source={{ uri: infoProduto["thumbnail"] }} />
            </Card>
            <Text style={{color: 'white', margin: 5}}>{infoProduto["description"]}</Text>
            <Divider style={{margin: 8}}/>
            <Text style={{color: 'white'}}>{`Valor: R$${infoProduto['price']}`}</Text>
            <Text style={{color: 'white'}}>{`Porcentagem de desconto: ${infoProduto['discountPercentage']}%`}</Text>
            <Text style={{color: 'white'}}>{`Marca: ${infoProduto['brand']}`}</Text>
            <Text style={{color: 'white'}}>{`Garantia: ${infoProduto['warrantyInformation']}`}</Text>

            <Divider style={{margin: 8}}/>
            <Text variant="displaySmall" style={{color: 'white'}}>Ratings</Text>
            <FlatList
                data={comentarios}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Title title={item["reviewerName"]} />
                        <Card.Content>
                            <Text>{item["comment"]}</Text>
                            <Text>{`Rating: ${item["rating"]}`}</Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,

        backgroundColor: "#413A36",
    },
    card:{
      margin: 3
    }
});
