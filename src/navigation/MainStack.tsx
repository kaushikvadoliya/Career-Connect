/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { AuthStore } from '../Zustand/Store/AuthStore';
import { ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { user, fetchUser, error, loading } = AuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (error) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  console.log(user);

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user !== null ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="HomeStack" component={HomeStack} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
