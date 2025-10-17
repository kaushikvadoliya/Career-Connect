/* eslint-disable react-native/no-inline-styles */
import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'red' }}>DetailsScreen</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;
