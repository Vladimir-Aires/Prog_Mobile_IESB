import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TaskCard from "../components/TaskCard";
import {saveTasks, loadTasks} from "../services/storage";

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks(){
            const storedTasks = await loadTasks();
            setTasks(storedTasks);
        };
        fetchTasks();
    }, []);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks])

    function handleAddTask(newTask) {
        setTasks([...tasks, {...newTask, completed: false}]);
    }

    function handleEditTask(editedTask) {
        setTasks(
            tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
        );
    }

    function handleDelete(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    function toggleComplete(taskId){
        setTasks(
            tasks.map((task) => task.id === taskId ? {...task, completed: !task.completed} : task)
        )
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
                        onToggleComplete={toggleComplete}
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
