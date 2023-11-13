import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import { Appbar, Drawer } from 'react-native-paper';
import { Menu } from './components/Menu';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Menu />
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
    backgroundColor: '#F6F1EE',
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

