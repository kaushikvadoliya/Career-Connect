/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LineChartScreen from '../screens/LineChartScreen';
import { useNavigation } from '@react-navigation/native';
import PieChartScreen from '../screens/PieChartScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'LineChart',
          headerRight: () => (
            <Button
              title="Next"
              onPress={() => navigation.navigate('PieChart')}
            />
          ),
        }}
        name="LineChart"
        component={LineChartScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'PieChart',
        }}
        name="PieChart"
        component={PieChartScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
