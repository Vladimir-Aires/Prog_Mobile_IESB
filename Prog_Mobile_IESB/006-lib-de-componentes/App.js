import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import { PaperProvider, Card, Text } from "react-native-paper";

export default function App() {
    const lista = [
        {
            titulo: "Card 1",
            descricao:
                "Flutterium dolor sit widget, consectetur navigation elit, sed do bloc tempor incididunt ut layout magna aliqua.",
            imagem: "https://picsum.photos/400",
        },
        {
            titulo: "Card 2",
            descricao:
                "Flutterium dolor sit widget, consectetur navigation elit, sed do bloc tempor incididunt ut layout magna aliqua.",
            imagem: "https://picsum.photos/400",
        },
        {
            titulo: "Card 3",
            descricao:
                "Flutterium dolor sit widget, consectetur navigation elit, sed do bloc tempor incididunt ut layout magna aliqua.",
            imagem: "https://picsum.photos/400",
        },
        {
            titulo: "Card 4",
            descricao:
                "Flutterium dolor sit widget, consectetur navigation elit, sed do bloc tempor incididunt ut layout magna aliqua.",
            imagem: "https://picsum.photos/400",
        },
    ];

    return (
        <PaperProvider>
            <View>
                <StatusBar style="auto" />

                <FlatList
                    horizontal
                    data={lista}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: item.imagem }} />
                            <Card.Content>
                                <Card.Title title={item.titulo} />

                                <Text>{item.descricao}</Text>
                            </Card.Content>
                        </Card>
                    )}
                />


                <FlatList
                   
                    data={lista}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: item.imagem }} />
                            <Card.Content>
                                <Card.Title title={item.titulo} />

                                <Text>{item.descricao}</Text>
                            </Card.Content>
                        </Card>
                    )}
                />
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

    card:{
      margin: 30
    }
});
