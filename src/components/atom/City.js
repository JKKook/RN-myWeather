import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function City() {
  const [city, setCity] = useState('...Loading');
  const [location, setLocation] = useState();
  const [msg, setMsg] = useState(true);

  const ask = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission !== 'granted') {
      setMsg(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    console.log(location[0].city);
    setCity(location[0].city);
  };

  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 42,
    fontWeight: '600',
    color: 'white',
  },
});
