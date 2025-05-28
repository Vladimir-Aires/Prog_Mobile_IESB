import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Button, Text} from 'react-native-paper'

export default function AlunoLista({navigation, route}) {

  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: 'Teste',
      cpf: '84518651',
      email: 'ijohgyh@gmail.com',
      dataNasc: '77/77/7777',
      telefone: '4865168451'
    },

    {
      id: 2,
      nome: 'Teste 2',
      cpf: '84518651',
      email: 'ijohgyh@gmail.com',
      dataNasc: '77/77/7777',
      telefone: '4865168451'
    }
  ])
  return (
    <View style={styles.container}>
      <Button style={{margin: 5}}mode='contained'onPress={() => navigation.navigate('AlunosForm')} icon={'plus'} >Cadastrar</Button>

      <FlatList
        data={alunos}
        renderItem={({item}) => (
          <Card style={{margin: 3}}>
            <Card.Content>
              <Text>{`ID: ${item.id}`}</Text>
              <Text>{`Nome: ${item.nome}`}</Text>
              <Text>{`CPF: ${item.cpf}`}</Text>
              <Text>{`Email: ${item.email}`}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Editar</Button>
              <Button>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    padding: 10
  }
})