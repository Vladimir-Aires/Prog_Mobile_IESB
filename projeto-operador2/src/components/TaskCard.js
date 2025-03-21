import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { TASK_CATEGORIES } from "../utils/categories"
import { FontAwesome } from "@expo/vector-icons"



export default function TaskCard({task, onEdit, onDelete}) {
    const category = TASK_CATEGORIES[task.category];

  return (
    <View style={styles.card}>
        <FontAwesome name={category.icon} size={24} color="#fff" style={styles.icon}/>
        {/* <View style={styles.iconContainer}>{category.icon(24, "#fff")}</View> */}

        <View style={styles.textContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.category}>{TASK_CATEGORIES[task.category]?.label}</Text>
        </View>

        
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
    
    textContainer:{
        flex:1,
        marginLeft:10
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
    // taskCategory:{
    //     fontSize: 12,
    //     color: "#aaa",
    // },
    // actions:{
    //     flexDirection:"row",
    // },
})
