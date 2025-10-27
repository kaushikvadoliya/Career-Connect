import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HooksScreen from '../screens/HooksScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Hook" component={HooksScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
