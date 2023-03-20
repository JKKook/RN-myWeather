import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, setTime } from 'react';

export default function City({ city, days, handleLocation }) {
  const [current, setCurrent] = useState(0);

  // handleDate();

  return (
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  city: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
  },
});
