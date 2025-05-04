import { StyleSheet, View, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function CopaScreen() {
    const copa = {
        nome: "Copa do Mundo FIFA 2022",
        imagem: "https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg",
        local: "Qatar",
        organizacao: "FIFA",
        mascote: "La'eeb",
        edicao: 22,
        ano: 2022,
        campeao: "Argentina",
        viceCampeao: "França",
    };

    const dadosCopaArray = Object.entries({ copa });
    const dadosCopaExtraidos = dadosCopaArray.map(([chave, valor]) => ({
        id: chave,
        ...valor,
    }));

    console.log(dadosCopaArray);
    console.log(dadosCopaExtraidos);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text variant="headlineLarge" style={styles.title}>
                Descrição
            </Text>
            <FlatList
                data={dadosCopaExtraidos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Cover
                            source={{ uri: item.imagem }}
                            style={styles.cardImg}
                        />
                        <Card.Title
                            title={item.nome}
                            style={styles.cardTitle}
                        />
                        <Card.Content style={styles.cardContent}>
                            <Text>Local: {item.local} </Text>
                            <Text>Organização: {item.organizacao} </Text>
                            <Text>Mascote: {item.mascote} </Text>
                            <Text>Edição: {item.edicao} </Text>
                            <Text>Ano: {item.ano} </Text>
                            <Text>Campeão: {item.campeao} </Text>
                            <Text>Vice-Campeão: {item.viceCampeao} </Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#4545",
        minHeight: "100%",
    },
    title: {
      textAlign: 'center',
      margin: 5
    },

    card: {
        display: "flex",
    },

    cardImg: {
        width: 210,
        resizeMode: "cover",

        alignSelf: "center",
        // left: 80,
        // top: 10,
        margin: 5,
        // borderRadius: 50
    },

    cardTitle: {
      fontSize: 100
    },
    cardContent: {},
});
