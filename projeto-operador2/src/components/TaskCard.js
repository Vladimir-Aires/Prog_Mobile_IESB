import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { TASK_CATEGORIES } from "../utils/categories"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"



export default function TaskCard({task, onEdit, onDelete, onToggleComplete}) {
    const category = TASK_CATEGORIES[task.category] || TASK_CATEGORIES.personal;

  return (
    <View style={[styles.card, task.completed && styles.completedCard]}>

        {/* Botão de conclir */}
        <TouchableOpacity onPress={() => onToggleComplete(task.id)} style={styles.completeButton}>
            <FontAwesome name={task.completed ? "check-square" : "square-o"} size={24} color="#4CAF50"/>
        </TouchableOpacity>


        {/* ícone da categoria */}
        <FontAwesome name={category.icon} size={24} color="#fff" style={styles.icon}/>
        
        {/* Conteúdo da tarefa */}
        <View style={styles.textContainer}>
            <Text style={[styles.taskTitle, task.completed && styles.completedText]}>{task.title}</Text>
            <Text style={styles.category}>{TASK_CATEGORIES[task.category]?.label}</Text>
        </View>

            {/* Botões de ação */}
            <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
                <FontAwesome name="edit" size={20} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
                <FontAwesome name="trash" size={20} color="#ff4d4d"/>
            </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    completeButton:{
        marginRight: 10
    },
    completedCard:{
        opacity: 0.5
    },
    icon:{
        marginRight: 10
    },
    
    textContainer:{
        flex:1,
        // marginLeft:10
    },
    title:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    category:{
        color:"#aaa",
        fontSize:14
    },
    iconButton:{
        marginLeft: 10,
        padding: 5
    },
    taskTitle:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    completedText:{
        textDecorationLine: "line-through",
        color:"#bbb"
    }
})
