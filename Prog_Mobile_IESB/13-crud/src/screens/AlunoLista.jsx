import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Card, Button, Text} from 'react-native-paper'
import AlunosService from '../../service/AlunosService'


export default function AlunoLista({navigation, route}) {

  const [alunos, setAlunos] = useState([])


  useEffect(() => {
    buscarAlunos()
  }, [])

  async function buscarAlunos(){
    const listaAlunos = await AlunosService.listar()
    setAlunos(listaAlunos)


  }  

  async function removerAluno(){
    await AlunosService.remover(id)
    alert('Aluno excluído com sucesso!')
    buscarAlunos()
  }
  
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
              <Button icon='pencil' onPress={() => navigation.navigate('AlunoForm', item)}/>
              <Button icon='delete' onPress={() => removerAluno(item['id'])}/>
              
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
  },
  
})