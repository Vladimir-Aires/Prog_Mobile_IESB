// data/categories.js
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Exemplo de ícone, escolha a que preferir

export const mainCategories = [
    "laptops",
    "mens-watches",
    "mobile-accessories",
    "smartphones",
    "tablets",
    "womens-watches",
];

// Mapeamento de categorias para nomes mais amigáveis e ícones
export const categoriesData = [
    {
        name: "Laptops",
        value: "laptops",
        icon: Platform.OS === 'ios' ? 'laptop-mac' : 'laptop', // Exemplo de ícone
    },
    {
        name: "Mens-watches",
        value: "mens-watches",
        icon: "watch",
    },
    {
        name: "Mobile accessories",
        value: "mobile-accessories",
        icon: "headphones", // Ou outro ícone de acessório
    },
    {
        name: "Smartphones",
        value: "smartphones",
        icon: "cellphone",
    },
    {
        name: "Tablets",
        value: "tablets",
        icon: "tablet-android", // Ou 'tablet-ipad' para iOS
    },
    {
        name: "Womens watches",
        value: "womens-watches",
        icon: "watch-vibrate",
    },
    // Adicione mais categorias se você tiver no seu Supabase
];