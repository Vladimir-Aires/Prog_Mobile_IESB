import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import TaskCard from '../components/TaskCard'

export default function HomeScreen() {
    const [tasks, setTasks] = useState([
        {id: "1", title: "Comprar comida", category:"personal"},
        {id:"2", title:"Combinar projeto", category: "work"},
        {id: "3", title:"Estudar React Native", category: "study"},
    ]);

    function handleEdit(taskId){
        console.log("Editar tarefa:",taskId)
    }

    function handleDelete(taskId){
        setTasks(tasks.filter((task) => task.id !== taskId))
    }
  return (
    <View>
        <FlatList 
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TaskCard task={item} onEdit={() => handleEdit(item.id)} onDelete={() => handleDelete(item.id)}/>
            )}

        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#121212",
        padding: 20,
    }
})



