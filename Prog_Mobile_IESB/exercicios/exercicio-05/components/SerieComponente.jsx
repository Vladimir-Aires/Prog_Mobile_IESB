import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function SerieComponente({
    nome,
    ano,
    diretor,
    temporadas,
    capa,
}) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: capa }} style={styles.imagemCapa} />
            <View style={styles.descriptions}>
                <Text>Nome:{nome} </Text>
                <Text>Ano:{ano} </Text>
                <Text>Diretor:{diretor} </Text>
                <Text>Temporadas:{temporadas} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding:10,
        backgroundColor: "#FFD700",
        width: 300,
        alignItems:"center",
        borderRadius:10,
    },
    descriptions: {},
    imagemCapa: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
});
