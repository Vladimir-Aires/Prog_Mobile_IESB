import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa(props) {

    const {dados} = props

  return (
    <View>
      <Text>Pessoa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "yellow",
        borderWidth: 10,
        padding: 10
    },
    texto:{
        fontSize: 10,
        fontWeight
    }
})