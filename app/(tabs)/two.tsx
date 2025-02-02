// two.tsx
import { StyleSheet, Platform, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import MapView, { Marker, Callout } from 'react-native-maps';
import SaveButton from '@/components/SaveButton';

export default function TabTwoScreen() {
  const webViewRef = useRef<WebView>(null);

  const locations = [
    {
      id: '1',
      name: 'Affordable Farm',
      address: '123 Farm Lane',
      costRange: '$$',
      distance: 1.2,
      latitude: 36.1627,
      longitude: -86.7816,
    },
  ];

  const renderMarkers = () => {
    return locations.map((loc) => (
      <Marker
        key={loc.id}
        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
      >
        <Callout tooltip>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutTitle}>{loc.name}</Text>
            <Text>{loc.address}</Text>
            <Text>{loc.costRange}</Text>
            {loc.distance !== undefined && <Text>{loc.distance.toFixed(1)} miles away</Text>}
            <SaveButton locationId={loc.id} />
          </View>
        </Callout>
      </Marker>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {Platform.OS === 'ios' || Platform.OS === 'android' ? (
        <WebView
          ref={webViewRef}
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
      <MapView
        style={styles.overlayMap}
        initialRegion={{
          latitude: 36.1627,
          longitude: -86.7816,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        pointerEvents="none"
      >
        {renderMarkers()}
      </MapView>
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
  map: {
    height: 400,
    width: '100%',
  },
  iframe: {
    height: 400,
    width: '100%',
  },
  overlayMap: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  calloutContainer: {
    width: 200,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});