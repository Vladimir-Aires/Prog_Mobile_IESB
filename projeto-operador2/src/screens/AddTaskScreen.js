import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import {Picker} from "@react-native-picker/picker"
import {TASK_CATEGORIES} from "../utils/categories"



export default function AddTaskScreen({navigation, route}) {
    const {addTask} = route.params;
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState(Object.keys(TASK_CATEGORIES)[0])

    function handleSave(){
        if(title.trim() === "") return;
        addTask({id: Date.now().toString(), title, category});
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Título da Tarefa:</Text>
        <TextInput 
        style={styles.input}
        placeholder="Digite o título..."
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
        />

        <Text style={styles.label}>Categoria:</Text>
        <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)} style={styles.picker}>
            {Object.entries(TASK_CATEGORIES).map(([key, {label}])=> (
                <Picker.item key={key} label={label} value={key} />
            ))}
            
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#121212",
        padding: 20,
        justifyContent: "center",
    },
    label:{
        color:"#fff",
        fontSize: 16,
        marginBottom: 5,
    },
    input:{
        backgroundColor:"#222",
        color:"white",
        padding:10,
        borderRadius: 5,
        marginBottom: 15,
       
    },
    picker:{
        backgroundColor:"#222",
        color:"#fff",
        borderRadius: 5,
        marginBottom: 15,
    },
    button:{
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",

    },
    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
})
