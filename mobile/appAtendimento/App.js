import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './TelaPrincipal';
import TelaPedidos from './TelaPedidos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: "FoodOrder's" }} />
        <Stack.Screen name="TelaPedidos" component={TelaPedidos} options={{ title: "FoodOrder's" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
