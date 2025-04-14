import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from "react-native-paper"
import { FlatList } from 'react-native'

export default function HomeScreen() {


  const lista = [
    {
      titulo: "Card 1",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 2",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 3",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 4",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
  ]

  return (
    
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{textAlign: 'center'}}>Tela de Início</Text>

      
      <FlatList 
        data={lista}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Card.Cover source={{uri: item.imagem}} />
            <Card.Content>
              <Title>{item.titulo}</Title>
              <Paragraph>{item.descricao}</Paragraph>
            </Card.Content>

          </Card>
        )}
      />

      
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'gray',
    flex:1,
    alignItems: 'center',
    padding: 10,

  },
  card:{
    margin: 10,
    
  
  }
})