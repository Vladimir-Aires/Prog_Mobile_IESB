import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { FontAwesome } from "react-native-vector-icons";
import EscudoScreen from "./screens/EscudoScreen";
import JogadoresScreen from "./screens/JogadoresScreen";
import TitulosScreen from "./screens/TitulosScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="EscudoScreen"
                        component={EscudoScreen}
                        options={{
                            title: "Início",
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="JogadoresScreen"
                        component={JogadoresScreen}
                        options={{
                            title: "Jogadores",
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome
                                    name="user"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="TitulosScreen"
                        component={TitulosScreen}
                        options={{
                            title: "Titulos",
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome
                                    name="trophy"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
