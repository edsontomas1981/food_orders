import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App'; // Seu componente principal

const AppWrapper = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default AppWrapper;

