import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/TabScreens/CategoryScreen";
import ProductsCategoryScreen from "../screens/StackScreens/ProductsCategoryScreen";
import ProductDetailScreen from "../screens/StackScreens/ProductDetailScreen";

const Stack = createStackNavigator();

export function CategoriesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Discover"
                component={CategoryScreen}
               
            />
            <Stack.Screen
                name="ProductsCategoryScreen"
                component={ProductsCategoryScreen}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{title: "Details"}}
            />
        </Stack.Navigator>
    );
}
