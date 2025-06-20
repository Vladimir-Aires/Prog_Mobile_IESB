import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { supabase } from "../../config/supabase"; // Ajuste o caminho se necessário
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window"); // Para largura da imagem

export default function ProductDetailScreen() {
    const route = useRoute(); // Hook para acessar os parâmetros da rota
    const navigation = useNavigation(); // Hook para navegação
    const { productId } = route.params; // Obtém o productId passado como parâmetro

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                setProduct(null);

                // Busca o produto pelo ID
                const { data, error } = await supabase
                    .from("products")
                    .select("*") // Seleciona todas as colunas para detalhes
                    .eq("id", productId)
                    .single(); // '.single()' espera que apenas um resultado seja retornado

                if (error) {
                    throw error;
                }

                if (data) {
                    setProduct(data);
                    // Opcional: Define o título da tela com o nome do produto
                    navigation.setOptions({ title: data.title });
                } else {
                    setError("Produto não encontrado."); // Caso o ID não retorne nenhum produto
                }
            } catch (err) {
                console.error(
                    "Erro ao buscar detalhes do produto:",
                    err.message
                );
                setError("Não foi possível carregar os detalhes do produto.");
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProductDetails();
        } else {
            setError("ID do produto não fornecido.");
            setLoading(false);
        }
    }, [productId, navigation]); // Dependências: re-busca se productId mudar ou navigation mudar

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando detalhes do produto...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: product.thumbnail }}
                style={styles.productImage}
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productPrice}>
                    R$ {product.price ? product.price.toFixed(2) : "N/A"}
                </Text>

                {/* Você pode adicionar a avaliação aqui se tiver a coluna 'rating' ou reviews */}
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.ratingText}>
                        {product.rating ? product.rating.toFixed(1) : "N/A"}
                    </Text>
                </View>

                <Text style={styles.productDescription}>
                    {product.description}
                </Text>

                {/* Se tiver outras informações como marca, estoque, etc. */}
                {product.brand && (
                    <Text style={styles.infoText}>
                        <Text style={styles.infoLabel}>Brand:</Text>{" "}
                        {product.brand}
                    </Text>
                )}
                {product.stock !== undefined && (
                    <Text style={styles.infoText}>
                        <Text style={styles.infoLabel}>Stock:</Text>{" "}
                        {product.stock}
                    </Text>
                )}

                <TouchableOpacity style={styles.addToCartButton}>
                    <Icon
                        name="cart-plus"
                        size={24}
                        color="#fff"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.addToCartButtonText}>
                       Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
    },
    productImage: {
        width: width, // Ocupa a largura total da tela
        height: width * 0.75, // Altura proporcional à largura (3:4 ratio)
        resizeMode: "contain", // Ajusta a imagem dentro da área, sem cortar
        backgroundColor: "#fff", // Fundo branco para imagens com transparência ou pequenas
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20, // Sobrepõe um pouco a imagem para um efeito visual
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    productTitle: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    productPrice: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#007bff",
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    ratingText: {
        fontSize: 18,
        color: "#666",
        marginLeft: 5,
    },
    productDescription: {
        fontSize: 16,
        lineHeight: 24,
        color: "#555",
        marginBottom: 20,
    },
    infoText: {
        fontSize: 15,
        color: "#555",
        marginBottom: 5,
    },
    infoLabel: {
        fontWeight: "bold",
    },
    addToCartButton: {
        backgroundColor: "#28a745", // Verde para 'Adicionar'
        paddingVertical: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    addToCartButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    buttonIcon: {
        marginRight: 5,
    },
});
