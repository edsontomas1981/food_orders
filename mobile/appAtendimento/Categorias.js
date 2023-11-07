import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Categorias = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonCategoria} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCategoria: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#9b0800',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fdbf5c',
    fontSize: 18,
  },
});

export default Categorias;