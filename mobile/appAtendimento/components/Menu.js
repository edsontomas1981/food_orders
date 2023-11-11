import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar,ToggleButton,Searchbar,Drawer } from 'react-native-paper';


class Menu extends Component {
  render() {
    return (
    <SafeAreaProvider>
      <Appbar.Header>
        <ToggleButton.Row>
          <ToggleButton icon="format-align-left" value="left" />
        </ToggleButton.Row>
        <Searchbar style={styles.searchbar}
          placeholder="Buscar"
        />
      </Appbar.Header>
    </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop:40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
  },
  searchbar:{
    flex:0,
    width:250,
    justifyContent: 'flex-end',
  }  
});

export default Menu;