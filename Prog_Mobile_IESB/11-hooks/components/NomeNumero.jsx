import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NomeNumero() {

    const [nome, setNome] = useState('Seu nome')
    const [numero, setNumero] = useState('Um número qualquer')


    function mostrarNomeNumero(){
        setNome('Vladimir')
        setNumero('8451')
    }

    

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
            <Card.Title title="Componente NomeNumero" />
            <Text variant="displaySmall">Nome: {nome}</Text>
            <Text variant='displaySmall'>Número: {numero}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={mostrarNomeNumero}>Mostrar</Button>
        </Card.Actions>
        

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({

})