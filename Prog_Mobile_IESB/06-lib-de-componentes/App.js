import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Divider, PaperProvider } from "react-native-paper";

export default function App() {
    return (
        <PaperProvider>
            <View>
                <StatusBar style="auto" />
                <Button mode='contained'>Clique AQUI</Button>
                <Button mode="contained-tonal">Clique AQUI</Button>

                <Button icon="camera" mode="contained-tonal">Clique AQUI</Button>
                <Button mode="elevated">Clique AQUI</Button>
                <Button mode="outlined">Clique AQUI</Button>
                <Button mode="text">Clique AQUI</Button>

                <Text>Uva</Text>
                <Divider />

                <Text>Maçã</Text>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
