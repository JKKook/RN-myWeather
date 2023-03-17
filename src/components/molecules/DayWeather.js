import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
console.log(SCREEN_WIDTH);
export default function DayWeather() {
  return (
    <View style={styles.day}>
      <Text style={styles.temp}>13</Text>
      <Text style={styles.descriptionTemp}>Sunny</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    fontSize: 102,
    fontWeight: '600',
    color: 'white',
    marginTop: 50,
  },
  descriptionTemp: {
    fontSize: 38,
    fontWeight: '500',
    color: 'white',
    marginTop: -30,
  },
});
