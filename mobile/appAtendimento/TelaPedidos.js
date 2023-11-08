import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categorias from './Categorias';

const TelaPedidos = ({ route }) => {

  const buttons = ['Bebidas', 'Alimento', 'Pizzas'];

  const { buttonText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textPedido}>Pedidos Mesa {buttonText}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((buttonText, index) => (
          <Categorias
            key={index} // Importante ter uma chave única para cada elemento na lista
            text={buttonText}
            onPress={() => voltaPrincipal(buttonText)} // Adicione o onPress com a função desejada
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdbf5c',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9b0800',
  },
  textPedido: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

});

export default TelaPedidos;
