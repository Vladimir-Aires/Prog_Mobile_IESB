import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState('');
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarDezenas = () => {
    const numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const jogo = Array.from(numeros).sort((a, b) => a - b).join(' - ');
    setJogoGerado(jogo);
    setJogosMegaSena([jogo, ...jogosMegaSena]);
  };

  return (
    <View style={{ padding: 16 }}>
      <Button mode="contained" onPress={gerarDezenas}>
        Gerar jogo
      </Button>

      {jogoGerado !== '' && (
        <Card style={{ marginTop: 16 }}>
          <Card.Content>
            <Title>Último jogo</Title>
            <Text>{jogoGerado}</Text>
          </Card.Content>
        </Card>
      )}

      <Title style={{ marginTop: 24 }}>Histórico</Title>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Content>
              <Text>{item}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
