import { StyleSheet, View, FlatList } from "react-native";
import { Text, Card, Title, Paragraph, Divider} from "react-native-paper";
import React from "react";

export default function TitulosScreen() {
    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
        },
        {
            nome: "Copa Libertadores da América",
            anos: [1981, 2019, 2022],
        },
        {
            nome: "Copa do Brasil",
            anos: [1990, 2006, 2013, 2022, 2024],
        },
        {
            nome: "Supercopa do Brasil",
            anos: [2020, 2021, 2025],
        },
    ];
    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={{textAlign: 'center', margin: 10}}>Lista de Títulos</Text>
            <Divider style={{backgroundColor: 'black'}}/>

            <FlatList 
                data={titulos}
                renderItem={({item}) => (
                    <Card style={styles.card}>
                        <Title>{item.nome}</Title>
                        <Divider />
                        {item.anos?.map((ano) => (
                            <Paragraph>{ano}</Paragraph>
                        ))}
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'gray',
        padding: 10
    },

    card:{
        margin: 20,
        minHeight: 80,
        maxHeight: 400,
        padding: 10
    }
});
