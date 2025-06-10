import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Municipio from './components/Municipio';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <Municipio 
        nome='Águas-Lindas'
        imagem='imagem1'
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
