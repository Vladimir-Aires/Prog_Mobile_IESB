import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./routes/TabRoutes";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
    GestureHandlerRootView,
    ScrollView,
} from "react-native-gesture-handler";

export default function App() {
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor="#000000" />
                <TabRoutes />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
