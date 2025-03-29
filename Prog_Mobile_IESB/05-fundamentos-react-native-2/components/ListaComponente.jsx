import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const lista = ["Uva", "Maçã", "Banana", "Laranja"]

  return (
    <View>
      {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({})