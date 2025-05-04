import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


export default function HomeScreen(props) {

    const {navigation, route} = props

    const usuarioLogado = true
    console.log(navigation)
    console.log(route)

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{ usuarioLogado ? "Bem-Vindo, Vladimir!" : "Faça login ou cadastre-se" }</Text>
      <Button style={styles.btn} mode='contained' onPress={() => navigation.navigate('ProfileScreen')}>Ir para Profile Screen</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'red',
        minHeight: '100%'
        
    },

    btn:{
        alignSelf: 'flex-end'
    }

   
})