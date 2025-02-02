import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types';
import TabOneScreen from '@/app/(tabs)/index';
import TabTwoScreen from '@/app/(tabs)/two';
import TabThreeScreen from '@/app/(tabs)/three';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabOne">
        <Stack.Screen name="TabOne" component={TabOneScreen} />
        <Stack.Screen name="TabTwo" component={TabTwoScreen} />
        <Stack.Screen name="TabThree" component={TabThreeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
