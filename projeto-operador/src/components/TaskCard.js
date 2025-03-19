import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TaskCard = ({title, description, priority}) => {
    const getPriorityStyle = (priority) => {
        switch (priority){
            case 'high':
                return {backgroundColor: '#FF0000', icon: '🔥'};
            case 'medium':
                return {backgroundColor: '#FF8C00', icon: '⚠️'};
            case 'low':
                return {backgroundColor: '#008000', icon: '✅'};
            default:
                return {backgroundColor: '#808080', icon: '🔘'};
        }
    }

    const {backgroundColor, icon} = getPriorityStyle(priority)

    return (
        <View style={[styles.card, {borderColor: backgroundColor}]}>
            <View style={[styles.icon, {backgroundColor}]}>
                <Text style={styles.iconText}>{icon}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        marginBottom: 16,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    icon:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 16,
    },
    iconText:{
        fontSize: 20,
        color: '#FFF',
    },
    textContainer:{
        flex:1,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    description:{
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});

export default TaskCard
