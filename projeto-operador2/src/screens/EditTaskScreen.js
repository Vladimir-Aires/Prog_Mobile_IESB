import React,{useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import {Picker} from "@react-native-picker/picker"
import { TASK_CATEGORIES } from '../utils/categories'

export default function EditTaskScreen({navigation, route}) {
    const {task, editTask} = route.params;
    const [title, setTitle] = useState(task.title)
    const [category, setCategory] = useState(task.category)

    function handleSave(){
        if(title.trim() === "") return;
        editTask({...task, title, category});
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Título da Tarefa:</Text>
        <TextInput 
            style={styles.input}
            value={title}
            onChangeText={setTitle}
        />

        <Text style={styles.label}>Categoria:</Text>
        <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
            {Object.entries(TASK_CATEGORIES).map(([key, {label}])=> (
                <Picker.Item key={key} label={label} value={key} />
            ))}
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
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
    label: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 5,
    },
    input:{
        backgroundColor: "#222",
        color: "#fff",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    picker:{
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 5,
        marginBottom: 15
    },
    button:{
        backgroundColor: "#0007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText:{
        color:"#fff",
        fontSize: 16,
        fontWeight: "bold"

    }
})
