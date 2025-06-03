// src/navigation/MainNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProductScreen from '../screens/ProductScreen';
import StoreScreen from '../screens/StoreScreen';
import StoreDetailScreen from '../screens/StoreDetailScreen';
import SocialScreen from '../screens/SocialScreen';
import SupportScreen from '../screens/SupportScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="StoreDetail" component={StoreDetailScreen} />
      <Stack.Screen name="Social" component={SocialScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}