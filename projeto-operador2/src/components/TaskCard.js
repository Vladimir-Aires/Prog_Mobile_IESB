import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { TASK_CATEGORIES } from "../utils/categories"
import { FontAwesome } from "@expo/vector-icons"



export default function TaskCard({task, onEdit, onDelete}) {
    const category = TASK_CATEGORIES[task.category];

  return (
    <View style={styles.card}>
        <View style={styles.iconContainer}>{category.icon(24, "#fff")}</View>

        <View style={styles.textContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskCategory}>{category.label}</Text>
        </View>

        <View style={styles.actions}>
            <TouchableOpacity onPress={onEdit}>
                <FontAwesome name="edit" size={20} color="#007bff"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={{marginLeft: 10}}>
                <FontAwesome name="trash" size={20} color="#dc3545"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2c2c2c",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    iconContainer:{
        marginRight: 10,
        backgroundColor: "#444",
        padding: 10,
        borderRadius: 50,
    },
    textContainer:{
        flex:1,
    },
    taskTitle:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    taskCategory:{
        fontSize: 12,
        color: "#aaa",
    },
    actions:{
        flexDirection:"row",
    },
})
