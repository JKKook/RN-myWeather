import { StyleSheet, Text, View } from 'react-native';

export default function DayWeather() {
  return (
    <View style={styles.weather}>
      <View style={styles.day}>
        <Text style={styles.temp}>13</Text>
        <Text style={styles.descriptionTemp}>Sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weather: {
    flex: 2,
    fontSize: 38,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 102,
    fontWeight: '600',
    color: 'white',
  },
  descriptionTemp: {
    fontSize: 38,
    fontWeight: '500',
    color: 'white',
  },
});
