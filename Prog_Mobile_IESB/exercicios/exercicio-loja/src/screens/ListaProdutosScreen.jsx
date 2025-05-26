import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Card, Avatar, Button, Divider } from "react-native-paper";
import axios from "axios";

export default function ListaProdutosScreen({ navigation, route }) {
    const [produtos, setProdutos] = useState([]);
    const categoria = route.params;

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/category/${categoria}`)
            .then((resposta) => {
                setProdutos(resposta.data.products);
                
            })
            .catch((erro) => alert("Erro ao buscar usuário!"));
    }, []);

    console.log(produtos)

    return (
        <View>
            <Text variant="titleLarge" style={{textAlign: 'center', marginTop: 18}}>Categoria: {categoria}</Text>
            <Divider style={{marginTop: 10}}/>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Title
                            title={`${item["title"]}`}
                          
                        />

                        <Card.Content>
                            <Card.Cover
                                source={{ uri: item["thumbnail"] }}
                                style={styles.imagem}
                            />
                            <Card.Title
                                right={() => (
                                    <Button
                                        onPress={() =>
                                            navigation.navigate(
                                                "ProdutoScreen",
                                                item["id"]
                                            )
                                        }
                                    >
                                        Detalhes
                                    </Button>
                                )}
                            />
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 230,
        resizeMode: "cover",
        alignSelf: "center",
    },
    card:{
      margin: 20
    }
});
