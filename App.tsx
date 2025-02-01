import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NearMe from './screens/NearMe';
import Search from './screens/Search';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NearMe">
        <Stack.Screen name="NearMe" component={NearMe} options={{ title: 'Near Me' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;