import { StyleSheet, Platform, Text } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {Platform.OS === 'ios' || Platform.OS === 'android' ? (
        <WebView
          style={styles.map}
          source={{ uri: 'https://www.google.com/maps' }}
        />
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12890.123456789!2d-86.7816!3d36.1627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466e5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sMiddle%20Tennessee!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
          style={styles.iframe}
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

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
  map: {
    height: 400,
    width: '100%',
  },
  iframe: {
    height: 400,
    width: '100%',
  },
  unsupportedText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});
