import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Mesa from './Mesa';

const TelaPrincipal = ({ navigation }) => {
  const buttons = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'];

  const handleButtonPress = buttonText => {
    navigation.navigate('TelaPedidos', { buttonText });
  };

  const voltaPrincipal = buttonText => {
    navigation.navigate('TelaPrincipal', { buttonText });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atendimento Salão</Text>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
        />
      </View>

    <View style={styles.buttonContainer}>
      {buttons.map((buttonText, index) => (
        <Mesa
          key={index} // Importante ter uma chave única para cada elemento na lista
          text={buttonText}
          onPress={() => handleButtonPress(buttonText)} // Adicione o onPress com a função desejada
        />
      ))}
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdbf5c',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  buttonText: {
    color: '#fdbf5c',
    fontSize: 18,
  },
});

export default TelaPrincipal;
