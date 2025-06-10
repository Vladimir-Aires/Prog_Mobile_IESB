import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Text, Card, Avatar} from 'react-native-paper'

export default function Municipio(props) {

    const {nome, imagem} = props

  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Imagem: {imagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})