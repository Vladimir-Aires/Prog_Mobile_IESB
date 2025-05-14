import { StyleSheet, View } from 'react-native'
import {Text, Card, Button} from 'react-native-paper'
import React, { useState } from 'react'

export default function Controle() {

    const [volume, setVolume] = useState(0)

    function aumentar(){
        setVolume(volume + 1)
    }

    function diminuir(){
        setVolume(volume - 1)
    }

  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title="Componente Controle"></Card.Title>
            <Text>Volume: {volume}</Text>
        </Card.Content>
        <Card.Actions>
            <Button
            mode='contained'
            icon='minus'
            onPress={diminuir}
            >
                Menos
            </Button>
            <Button
            mode='contained'
            icon='plus'
            onPress={aumentar}
            >
                Mais
            </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})