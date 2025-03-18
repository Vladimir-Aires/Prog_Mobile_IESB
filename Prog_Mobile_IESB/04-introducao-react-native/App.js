import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  // lógica do componente
  const nome = 'Vladimir'

  function alerta(){
    alert('Botão Clicado!')
  }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Image source={{uri: 'https://i.pinimg.com/736x/bc/c5/f9/bcc5f940a3c85d7f1eafc102a1f21c11.jpg'}}
      style={{
        height:400,
        width:400
      }}
      />
      <Text>Texto de Exemplo</Text>
      <Text>Olá, meu nome é {nome}</Text>
      <Text>{300 / 3}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
      
    </View>
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
