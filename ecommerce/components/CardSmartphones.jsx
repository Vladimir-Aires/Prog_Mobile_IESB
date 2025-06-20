import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { Text, Card } from "react-native-paper";

export default function CardSmartphones({ category, title }) {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                // if (data && data.length > 0) {
                //     console.log("Primeira thumbnail:", data[0].thumbnail);
                // } // Log para verificar
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

    return (
        <FlatList
            style={{padding: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => (
                <Card style={styles.card}>
                    <Card.Cover source={{uri: item.thumbnail}}/>
                    <Card.Content style={{backgroundColor: '#332B2B', padding: 5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                        <Text style={{color: '#ffff'
                        }}>{item.title}</Text>
                        
                        <Text style={{color: "#ffff"}}>{item.price}</Text>
                    </Card.Content>
                </Card>
            )}
        />
    );
}

const styles = StyleSheet.create({

    card:{
        minWidth: 180,
        margin: 5
    }
});
