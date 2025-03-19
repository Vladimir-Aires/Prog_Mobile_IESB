import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import TaskCard from '../components/TaskCard'

const HomeScreen = () =>{
    return(
        <ScrollView contentContainerStyle={{padding: 16}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>Minhas Tarefas</Text>

            <TaskCard 
                title="Estudar React Native"
                description="Aprender sobre componentes, navegação e estado"
                priority='high'
            />
            <TaskCard 
                title="Comprar comida"
                description="arroz, feijão, batata, frango, cenoura"
                priority="medium"
            />
            <TaskCard 
                title="Lavar as roupas"
                description="unifome APM, calças e regatas"
                priority="low"
            />
        </ScrollView>
    )
}

export default HomeScreen;