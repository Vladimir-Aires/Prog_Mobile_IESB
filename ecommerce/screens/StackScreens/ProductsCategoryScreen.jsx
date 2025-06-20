import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { supabase } from "../../config/supabase";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductsCategoryScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();

    const { categoryName, categoryTitle } = route.params;

    useEffect(() => {
        // Define o título da tela com base na categoria
        navigation.setOptions({ title: categoryTitle || "Produtos" });

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data, error } = await supabase
                    .from("products")
                    .select("id, title, price, thumbnail") // Selecione apenas as colunas necessárias
                    .eq("category", categoryName) // Filtra pela categoria recebida via rota
                    .order("title", { ascending: true });

                if (error) {
                    throw error;
                }
                setProducts(data);
            } catch (err) {
                console.error(
                    `Erro ao buscar produtos para ${categoryName}:`,
                    err.message
                );
                setError(
                    "Não foi possível carregar os produtos. Tente novamente mais tarde."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName, categoryTitle]); // Re-executa se a categoria ou título mudar

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() =>
                navigation.navigate("ProductDetail", { productId: item.id })
            }
        >
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.productImage}
            />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>
                    R$ {item.price.toFixed(2)}
                </Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  listContent: {
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 15,
    color: '#007bff',
    fontWeight: '600',
  },
});
