import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import UsuarioScreen from "../screens/UsuarioScreen";
import {FontAwesome} from "react-native-vector-icons"

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Lista de Usuários",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <FontAwesome name='group' size={20} style={{marginLeft: 60}}/>
                    )
                }}
            />
            <Stack.Screen
                name="UsuarioScreen"
                component={UsuarioScreen}
                options={{
                    title: "Usuário",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <FontAwesome name='user' size={20} style={{marginLeft: 90}}/>
                    )
                }}
            />
        </Stack.Navigator>
    );
}
