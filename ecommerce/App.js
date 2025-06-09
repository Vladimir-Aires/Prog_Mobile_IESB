import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./routes/TabRoutes";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            
                <NavigationContainer>
                    <TabRoutes />
                </NavigationContainer>
            
        </>
    );
}
