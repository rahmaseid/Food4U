import { Platform } from 'react-native';
import GoogleMapReact from 'google-map-react'; // For web
import React from 'react';
import NativeMap from 'react-native-maps'; // Import NativeMap

const WebMap = () => {
  return <div style={{ height: '100vh', width: '100%' }}><GoogleMapReact /></div>;
};

const ResultsMapScreen = () => {
  return Platform.OS === 'web' ? (
    <WebMap /> // Use react-leaflet or google-map-react here
  ) : (
    <NativeMap /> // Use react-native-maps here
  );
};