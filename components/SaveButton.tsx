
import React from 'react';
import { Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SaveButtonProps {
  locationId: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ locationId }) => {
  const handleSave = async () => {
    try {
      // Retrieve the current list of saved locations from AsyncStorage.
      const savedLocations = await AsyncStorage.getItem('savedLocations');
      let locationsArray: string[] = savedLocations ? JSON.parse(savedLocations) : [];

      // If the location is not already saved, add it to the array.
      if (!locationsArray.includes(locationId)) {
        locationsArray.push(locationId);
        await AsyncStorage.setItem('savedLocations', JSON.stringify(locationsArray));
        Alert.alert('Saved', 'Location saved successfully!');
      } else {
        Alert.alert('Already Saved', 'This location is already in your saved list.');
      }
    } catch (error) {
      console.error('Error saving location:', error);
      Alert.alert('Error', 'There was a problem saving the location.');
    }
  };

  return <Button title="Save" onPress={handleSave} />;
};

export default SaveButton;
