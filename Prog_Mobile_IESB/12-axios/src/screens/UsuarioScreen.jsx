import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UsuarioScreen({navigation, route}) {

    console.log("ID DO USUÁRIO RECEBIDO: ", route.params)
  return (
    <View>
      <Text>ID DO USUÁRIO RECEBIDO: {route.params}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})