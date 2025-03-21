import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Lista de Tarefas"}}/>
        <Stack.Screen name='AddTask' component={AddTaskScreen} options={{title: "Nova Tarefa"}}/>
        <Stack.Screen name='EditTask' component={EditTaskScreen} options={{title: "Editar Tarefa"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

