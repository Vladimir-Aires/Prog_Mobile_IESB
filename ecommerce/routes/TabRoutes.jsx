import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabScreens/HomeScreen";
import CategoryScreen from "../screens/TabScreens/CategoryScreen";
import CartScreen from "../screens/TabScreens/CartScreen";
import ProfileScreen from "../screens/TabScreens/ProfileScreen";
import { Button, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {AntDesign} from 'react-native-vector-icons'
import { CategoriesStack } from "./StackRoutes";

const Tab = createBottomTabNavigator();


//Alterar function para SearchBar
//Buscar componente de searchbar no react native paper
function CustomHeaderRight() {
    return (
        <View style={{ marginRight: 20 }}>
            <Button title="Search" onPress={() => alert("Ir para o perfil")} />
        </View>
    );
}

export default function TabRoutes() {
    return (
      
          <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#FF0000" },
                tabBarStyle: {
                    backgroundColor: "#332B2B",
                    height: 60,
                },
                headerStatusBarHeight: 17,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarIcon: ({color, size}) => (
                  <AntDesign name='home' color={color} size={size}/>
                )
              }}
            />

            <Tab.Screen name="Categories" component={CategoriesStack} options={{
               tabBarIcon: ({color, size}) => (
                  <AntDesign name='bars' color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="Cart" component={CartScreen} options={{
               tabBarIcon: ({color, size}) => (
                  <AntDesign name='shoppingcart' color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
               tabBarIcon: ({color, size}) => (
                  <AntDesign name='user' color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>

      
        
    );
}
