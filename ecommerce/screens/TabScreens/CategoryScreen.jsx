import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { categoriesData } from "../../data/categories"; // Importa os dados das categorias
import CategoryItem from "../../components/CategoryItem"; // Importa o componente do item

export default function CategoryScreen() {
    const renderItem = ({ item }) => <CategoryItem category={item} />;
    return (
        <View style={styles.container}>
            <FlatList
                data={categoriesData} // Usa os dados fixos das categorias
                keyExtractor={(item) => item.value} // `value` é a string da categoria
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    listContent: {
        paddingVertical: 10,
    },
});
