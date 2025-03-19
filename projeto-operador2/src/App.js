import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Lista de Tarefas"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

