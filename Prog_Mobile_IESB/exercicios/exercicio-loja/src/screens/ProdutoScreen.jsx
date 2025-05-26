import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ProdutoScreen({navigation, route}) {

  const [infoProduto, setInfoProduto] = useState('')
  const produto = route.params;


  useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${produto}`)
            .then((resposta) => {
                setInfoProduto(resposta.data);
                console.log(resposta.data);
                
            })
            .catch((erro) => alert("Erro ao buscar usuário!"));
    }, []);

  return (
    <View>
      <Text>{infoProduto['description']}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})