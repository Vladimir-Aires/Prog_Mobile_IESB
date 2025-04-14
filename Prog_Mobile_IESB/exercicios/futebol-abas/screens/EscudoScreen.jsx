import { StyleSheet, View, FlatList } from "react-native";
import { Text, Card, Title, Paragraph, Divider } from "react-native-paper";
import React from "react";

export default function EscudoScreen() {
    const time = [
        {
            nome: "Flamengo",
            escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', margin: 10}} variant="headlineLarge">Time</Text>
            <Divider />
            <FlatList
                data={time}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Cover source={{ uri: item.escudo }} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>{item.nome}</Title>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding: 30,
        
        backgroundColor: 'gray'
    },
    title:{
        margin: 10,
       
    },
    card:{
        margin: 10
    }
});
