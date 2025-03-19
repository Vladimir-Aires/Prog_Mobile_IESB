import { Text, View } from "react-native";


export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem-Vindo ao App de Tarefas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
    },
});