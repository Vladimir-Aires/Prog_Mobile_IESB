import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TaskCard from "../components/TaskCard";
import {saveTasks, loadTasks} from "../services/storage";

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all") //"all", "pending", "completed"

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

    const filteredTasks = tasks.filter((task) => {
        if(filter === "completed") return task.completed
        if(filter === "pending") return !task.completed
        return true
    })
    return (
        <View style={styles.container}>

            {/* Seção de filtros */}
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setFilter("all")} style={[styles.filterButton, filter === "all" && styles.activeFilter]}>
                    <Text style={styles.filterText}>Todas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter("pending")} style={[styles.filterButton, filter === "pending" && styles.activeFilter]}>
                    <Text style={styles.filterText}>Pendentes</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter("completed")} style={[styles.filterButton, filter === "completed" && styles.activeFilter]}>
                        <Text style={styles.filterText}>Concluídas</Text>
                </TouchableOpacity>

            </View>


            <FlatList
                data={filteredTasks}
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
    filterContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15
    },
    filterButton:{
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#ccc"
    },

    activeFilter:{
        backgroundColor: "#007bff",
        borderColor: "#007bff"
    },
    filterText:{
        color: "#fff",
        fontSize: 14
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
