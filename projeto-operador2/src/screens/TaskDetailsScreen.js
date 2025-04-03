import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome} from "@expo/vector-icons"
import categories from "../utils/categories"

export default function TaskDetailsScreen({route, navigation}) {

    const {task, toggleComplete} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>

      <View style={styles.categoryContainer}>
        <FontAwesome name={categories[task.category]?.icon} size={20} color="#fff"/>
        <Text style={styles.categoryText}>{categories[task.category]?.label}</Text>
      </View>

      <Text style={styles.status}>
        {task.completed ? "✅ Concluída" : "⏳ Pendente"}
      </Text>

      <TouchableOpacity
        style={[styles.completeButton, task.completed && styles.completed]}
        onPress={() => {
            toggleComplete(task.id)
            navigation.goBack();
        }}
      >
        <Text style={styles.completeButtonText}>
            {task.completed ? "Marcar como Pendente" : "Marcar como Concluída"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        color: "#ccc",
        margimBottom: 15,
        textAlign: "center"
    },
    categoryContainer:{
        flexDirection: "row",
        alignItems: "center",
        margimBottom: 15
    },
    categoryText:{
        color: '#fff',
        fontSize: 16,
        marginLeft: 8
    },
    status:{
        fontSize: 18,
        color: "#fff",
        marginBottom: 20
    },
    completeButton:{
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    completed:{
        backgroundColor: "#28a745"
    },
    completeButtonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})