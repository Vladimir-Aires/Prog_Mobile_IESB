import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import StackRoutes from './src/routes/StackRoutes';

const theme ={
  ...MD3DarkTheme, 
  colors:{
    ...MD3DarkTheme.colors,
    primary: '#6200ee'
  }
}

export default function App() {
  return (
   <PaperProvider theme={theme}>
    <NavigationContainer>
      <StackRoutes />      
    </NavigationContainer>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
