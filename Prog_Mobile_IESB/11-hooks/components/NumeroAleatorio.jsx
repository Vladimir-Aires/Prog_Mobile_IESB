import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function NumeroAleatorio() {

    const [numero, setNumero] = useState('???')

    function geradorNumeroAleatorio(){
        const num = Math.floor(Math.random() * 101)
        setNumero(num.toString())
    }

    function resetarNumero(){
        setNumero('0')
    }

  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title='Componente NumeroAleatorio'/>
            <Text>Numero Aleatório: {numero}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={resetarNumero}>Resetar</Button>
            <Button onPress={geradorNumeroAleatorio}>Gerar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
