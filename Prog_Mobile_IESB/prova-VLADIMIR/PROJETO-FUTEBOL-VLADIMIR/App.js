
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CopaScreen from "./screens/CopaScreen";
import {FontAwesome} from "react-native-vector-icons"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>
          <Tab.Screen 
            name="CopaScreen"
            component={CopaScreen}
            options={{
              title: "Copa 2022",
              tabBarIcon: ({color, size}) => (
                <FontAwesome 
                name='futbol-o'
                 color={color}
                 size={size} 
                />
              )
            }}
          
          />
        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}


