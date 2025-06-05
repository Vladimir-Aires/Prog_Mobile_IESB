import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/TabScreens/HomeScreen"
import CategoryScreen from "../screens/TabScreens/CategoryScreen"
import CartScreen from "../screens/TabScreens/CartScreen"
import ProfileScreen from "../screens/TabScreens/ProfileScreen"

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator 
      // screenOptions={{headerShown: false}}
    
    >

      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        
      />

       <Tab.Screen 
        name="Categories"
        component={CategoryScreen}
                
      />
       <Tab.Screen 
        name="Cart"
        component={CartScreen}
                
      />
       <Tab.Screen 
        name="Profile"
        component={ProfileScreen}
                
      />

    </Tab.Navigator>
  )
}

