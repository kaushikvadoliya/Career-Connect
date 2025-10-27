/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
