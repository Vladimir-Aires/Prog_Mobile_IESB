import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Certifique-se de que é o mesmo ícone que você importou em categories.js
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

export default function CategoryScreen({ category }) {
    const navigation = useNavigation();

    const handlePress = () => {
        // Navega para a tela de produtos, passando a categoria como parâmetro
        navigation.navigate("ProductsCategoryScreen", {
            categoryName: category.value,
            categoryTitle: category.name,
        });
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.leftContent}>
               
                <Avatar.Icon
                    icon={category.icon}
                    size={50}
                    color="#FF0000"
                    style={styles.icon}
                />
                {/* Nome da categoria */}
                <Text style={styles.categoryName}>{category.name}</Text>
            </View>
            {/* Botão de navegação (pode ser apenas um ícone de seta) */}
            <Icon name="chevron-right" size={30} color="#666" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        backgroundColor: "#fff",
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 15,
        backgroundColor: "#332B2B"
    },
    categoryName: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
    },
});
