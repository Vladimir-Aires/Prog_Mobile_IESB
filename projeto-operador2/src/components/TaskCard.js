import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TASK_CATEGORIES } from "../utils/categories";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";


export default function TaskCard({
    task,
    onEdit,
    onDelete,
    onToggleComplete,
    onDetails,
}) {
    //     const category = TASK_CATEGORIES[task.category] || TASK_CATEGORIES.personal;

    //   return (
    //     <View style={[styles.card, task.completed && styles.completedCard]}>

    //         {/* Botão de conclir */}
    //         <TouchableOpacity onPress={() => onToggleComplete(task.id)} style={styles.completeButton}>
    //             <FontAwesome name={task.completed ? "check-square" : "square-o"} size={24} color="#4CAF50"/>
    //         </TouchableOpacity>

    //         {/* ícone da categoria */}
    //         <FontAwesome name={category.icon} size={24} color="#fff" style={styles.icon}/>

    //         {/* Conteúdo da tarefa */}
    //         <View style={styles.textContainer}>
    //             <Text style={[styles.taskTitle, task.completed && styles.completedText]}>{task.title}</Text>
    //             <Text style={styles.category}>{TASK_CATEGORIES[task.category]?.label}</Text>
    //         </View>

    //             {/* Botões de ação */}
    //             <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
    //                 <FontAwesome name="edit" size={20} color="#fff"/>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
    //                 <FontAwesome name="trash" size={20} color="#ff4d4d"/>
    //             </TouchableOpacity>

    //     </View>
    //   )

    return (
        <View style={styles.card}>
            <FontAwesome
                name={TASK_CATEGORIES[task.category]?.icon}
                size={20}
                color={"#fff"}
            />

            <Text style={[styles.title, task.completed && styles.completed]}>
                {task.title}
            </Text>

            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
                    <FontAwesome
                        name={task.completed ? "check-circle" : "circle-thin"}
                        size={20}
                        color="#28a745"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDetails}>
                    <FontAwesome name="info-circle" size={20} color="#007bff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit}>
                    <FontAwesome name="pencil" size={20} color="#ffc107" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <FontAwesome name="trash" size={20} color="#dc3545" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    title: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        // fontWeight: "bold",
        marginLeft: 10
    },
    completed:{
        textDecorationLine: "line-through",
        color: "#888"
    },
    actions:{
        flexDirection: "row",
        gap: 15
    }
    // completeButton: {
    //     marginRight: 10,
    // },
    // completedCard: {
    //     opacity: 0.5,
    // },
    // icon: {
    //     marginRight: 10,
    // },

    // textContainer: {
    //     flex: 1,
    
    // },
    
    // category: {
    //     color: "#aaa",
    //     fontSize: 14,
    // },
    // iconButton: {
    //     marginLeft: 10,
    //     padding: 5,
    // },
    // taskTitle: {
    //     fontSize: 16,
    //     fontWeight: "bold",
    //     color: "#fff",
    // },
    // completedText: {
    //     textDecorationLine: "line-through",
    //     color: "#bbb",
    // },
});
