import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function HomeScreen() {
    const [products, setProducts] = useState([]);

    const mainCategories = [
        "laptops",
        "mens-watches",
        "mobile-accessories",
        "smartphones",
        "tablets",
        "womens-watches",
    ];

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=200")
            .then((res) => {
                const prod = res.data["products"];
                const filter = prod.filter((product) =>
                    mainCategories.includes(product["category"])
                );
                setProducts(filter);
                
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <View>
            {/* Carrossel improvisado com flatlist */}

            {/* Flatlist horizontal de produtos */}
            <FlatList
                data={products}
                renderItem={({ item }) => <Text>{item["title"]}</Text>}
            />

            {/* FlatList horizontal de produtos em promoção */}
            <Text>HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
