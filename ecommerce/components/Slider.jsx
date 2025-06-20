import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { supabase } from "../config/supabase";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";

const Slider = ({ category, title }) => {
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        async function fetchProductsByCategory() {
            try {
                setLoading(true);
                setError(null);
                const { data, error } = await supabase
                    .from("products") // Nome da sua tabela de produtos
                    .select(
                        "id, title, description, price, thumbnail, category"
                    )
                    .eq("category", category)
                    .limit(50); // Filtra por categoria

                if (error) {
                    throw error;
                }

                setProducts(data); // Atualiza o estado 'products'
                console.log(`Produtos da categoria "${category}":`, data);
                if (data && data.length > 0) {
                    console.log("Primeira thumbnail:", data[0].thumbnail);
                } // Log para verificar
            } catch (error) {
                console.error(
                    `Erro ao buscar produtos para o slider (${category}):`,
                    err.message
                );
                setError("Não foi possível carregar os produtos.");
                setProducts([]); // Garante que o array esteja vazio em caso de erro
            } finally {
                setLoading(false);
            }
        }

        if (category) {
            fetchProductsByCategory();
        }
    }, [category]);

    const handleOnScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        // console.log('viewableItems', viewableItems);
        if (viewableItems && viewabilityConfig.length > 0) {
            setIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            {products.length > 0 && (
                <Pagination data={products} scrollX={scrollX} index={index} />
            )}
        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
   
});
