import { Button, StyleSheet, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import React, { useState } from 'react';
import { View } from '@/components/Themed';

const ThreeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [affordability, setAffordability] = useState('$$');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store/Farm Name</Text>
      <Button title="Back to Search" onPress={() => navigation.navigate('TabOne')} />
      <Text>Affordability: {affordability}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Set Affordability to $" onPress={() => setAffordability('$')} />
      <Button title="Set Affordability to $$" onPress={() => setAffordability('$$')} />
      <Button title="Set Affordability to $$$" onPress={() => setAffordability('$$$')} />
    </View>
  );
};

export default ThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});