import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FilmeComponente({ nome, ano, tipo, diretor, capa }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: capa }} style={styles.imagemCapa} />
            <View style={styles.descriptions}>
                <Text style={styles.description}>Nome: {nome} </Text>
                <Text style={styles.description}>Ano: {ano} </Text>
                <Text style={styles.description}>Tipo:  {tipo}</Text>
                <Text style={styles.description}>Diretor: {diretor} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        margin: 10,
        padding:10,
        backgroundColor: "#FFD700",
        width: 300,
        alignItems:"center",
        borderRadius:10,
        
    },
    descriptions:{
        
    },
    description:{
        fontSize: 15,
        
    },
    imagemCapa:{
        width: 200,
        height: 200,
        borderRadius: 20,
        
    }
});
