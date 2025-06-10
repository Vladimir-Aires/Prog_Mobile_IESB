import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Text, Card, Avatar, IconButton, Divider } from "react-native-paper";

export default function HomeScreen({navigation, route}) {

     const [categorias, setCategorias] = useState([])

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/category-list")
            .then((res) => {
                
                setCategorias(res.data)
            })
            .catch((err) => console.log(err));

        

        
    }, []);

    useEffect(() => {
        traduzirCategorias()
    }, [categorias])

    async function traduzirTexto(texto){
        const res = await axios.post('https://libretranslate.de/translate', {
            q: texto,
            source: 'en',
            target: 'pt',
            format: 'text'
        }, {
            headers: {'Content-Type': 'application/json'}
        })

        return res.data.translatedText
    }

    async function traduzirCategorias(){
        const traducoes = await Promise.all(categorias.forEach((item) => traduzirTexto(item)));
        console.log(traducoes)
    }

    return (
        // <View style={styles.container}>
        //     <FlatList 
        //         data={categorias}
        //         renderItem={({item}) => (
        //             <Card style={styles.card}>
        //                 <Card.Title title={item.charAt(0).toUpperCase() + item.slice(1)}
        //                 right={() => <IconButton onPress={() => navigation.navigate('ListaProdutosScreen', item)} icon={'chevron-right-circle-outline'}/>}
        //                 />
        //             </Card>
        //         )}
        //     />
        // </View>
        <View>
            <Text>Ajustes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#413A36"
    },
    card:{
        margin: 15,
        marginBottom: 5,
        backgroundColor: '#EB6'
    }
});
