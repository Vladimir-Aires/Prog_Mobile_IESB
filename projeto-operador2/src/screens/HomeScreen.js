import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TaskCard from "../components/TaskCard";

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: "1", title: "Comprar comida", category: "personal" },
        { id: "2", title: "Combinar projeto", category: "work" },
        { id: "3", title: "Estudar React Native", category: "study" },
    ]);

    function handleAddTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    function handleEditTask(editedTask) {
        setTasks(
            tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
        );
    }

    function handleDelete(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskCard
                        task={item}
                        onEdit={() =>
                            navigation.navigate("EditTask", {
                                task: item,
                                editTask: handleEditTask,
                            })
                        }
                        onDelete={() => handleDelete(item.id)}
                    />
                )}
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                    navigation.navigate("AddTask", { addTask: handleAddTask })
                }
            >
                <FontAwesome name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    addButton:{
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "#007bff",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    }
});
