import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categorias from './Categorias';

const TelaPedidos = ({ route }) => {

  const buttons = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'];

  const { buttonText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Orders + {buttonText}</Text>

      <View style={styles.buttonContainer}>
        {buttons.map((buttonText, index) => (
          <Categorias
            key={index} // Importante ter uma chave única para cada elemento na lista
            text={buttonText}
            onPress={() => handleButtonPress(index)}
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },

});

export default TelaPedidos;
