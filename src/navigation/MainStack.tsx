import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import FormScreen from '../screens/FormScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
