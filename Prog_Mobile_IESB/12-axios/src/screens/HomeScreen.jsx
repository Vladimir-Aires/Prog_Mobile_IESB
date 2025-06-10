// Aqui haverá uma lista de usuários
import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Card, Avatar, IconButton } from "react-native-paper";
import axios from "axios";

export default function HomeScreen({ navigation, route }) {
    const [usuarios, setUsuarios] = useState([]);
    // const [produtos, setProdutos] = useState([]);
    // const electronics = produtos.filter(
    //     (produto) => produto["category"] === "electronics"
    // );

    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then((res) => {
                setUsuarios(res.data.users);
            })
            .catch((err) => console.log(err));

        // axios
        //     .get("https://fakestoreapi.com/products")
        //     .then((res) => {
        //         setProdutos(res.data);
        //     })
        //     .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            {/* <FlatList
                horizontal
                style={styles.flatlist}
                data={electronics}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Content>
                            <Card.Title title={item["title"]} />
                            <Card.Cover
                                source={{ uri: item["image"] }}
                                style={styles.image}
                            />
                        </Card.Content>
                    </Card>
                )}
            /> */}

            <FlatList
                style={styles.flatlist}
                data={usuarios}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("UsuarioScreen", item["id"])
                        }
                    >
                        <Card.Title
                            title={item["firstName"] + " " + item["lastName"]}
                            subtitle={item["email"]}
                            left={(props) => (
                                <Avatar.Image
                                    {...props}
                                    source={{ uri: item["image"] }}
                                />
                            )}
                            right={() => (
                                <IconButton icon="chevron-right" size={35} />
                            )}
                        />
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    card: {
        padding: 10,
        margin: 10,
    },
    flatlist: {
        marginBottom: 60,
    },
    image: {
        resizeMode: "cover",
        alignSelf: "center",
        width: 60,
    },
});
