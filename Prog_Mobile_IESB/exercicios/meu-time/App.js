import React from "react";
import { StatusBar } from "expo-status-bar";

import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";

export default function App() {

  function alerta() {
    alert("GOL DO BRASIL!!!")
  }
    return (
        <>
            <View style={styles.images}>
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/dd/89/9a/dd899a31b116e1cae798122197b17c60.jpg",
                    }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/a0/48/ed/a048ed00f8e2aac1373ec83632cf7455.jpg",
                    }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/c5/2f/05/c52f05f91914ae47ec0df4569a5ea393.jpg",
                    }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/01/ca/49/01ca49fc9547f9acbf8670bdee6f409c.jpg",
                    }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/29/75/ae/2975aeffacc67988e69cf7c012792771.jpg",
                    }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Brasil</Text>
                <Text>Formada em 1914</Text>
                <Text>Também chamada de "Seleção" ou "Seleção Canarinho"</Text>
                <Text>
                    Detém nove títulos da Copa América: 1919, 1922, 1949, 1989,
                    1997, 1999, 2004, 2007 e 2019
                </Text>
                <Button title='Gol' onPress={alerta}></Button>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34556",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        padding: 30,
    },

    images:{
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      gap: 10,
      backgroundColor: "green",
      
      
    },
    title:{
      fontSize: 40,
      fontWeight: "bold",
      backgroundColor: "yellow",
      padding: 5,
      borderRadius: 10
    }  
});
