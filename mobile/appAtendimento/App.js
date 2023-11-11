import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ToggleButton } from 'react-native-paper';

import Menu from './components/Menu';  // Importe o componente Menu
import Mesa from './components/Mesa';  // Importe o componente Menu

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <ToggleButton style={styles.botao} icon="menu" />
          <Text style={styles.texto}>Food Orders</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    marginTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'red',
  },
  botao: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  div: {
    flexDirection: 'row',  // Alteração para colocar os filhos na mesma linha
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginLeft: 10,  // Ajuste para adicionar espaço entre o botão e o texto
    fontSize:18,
  },
});

export default App;

