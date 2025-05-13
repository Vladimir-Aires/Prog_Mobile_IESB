import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Text} from "react-native-paper"
import NomeNumero from './components/NomeNumero';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.infoContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Exemplo de texto 2</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Exemplo de texto 3</Text>
      </View>

      <NomeNumero />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer:{
    backgroundColor: 'white',
    margin: 5,
    padding: 5
  }
});
