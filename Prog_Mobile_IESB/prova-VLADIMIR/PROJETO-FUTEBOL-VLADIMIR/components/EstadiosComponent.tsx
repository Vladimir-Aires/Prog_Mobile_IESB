import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import React from "react";

export default function EstadiosComponent(props) {
    const { id, nome, cidade, capacidade, imagem } = props;
    const title = `${id} - ${nome}`;

    return (
        <Card style={{ margin: 10 }}>
            <Card.Cover source={{ uri: imagem }} />
            <Card.Title title={title} subtitle={cidade} />
            <Card.Content>
                <Text>Mascote: </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({});
