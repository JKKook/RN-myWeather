import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import City from '../atom/City';
import DayWeather from '../molecules/DayWeather';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <City />
        <DayWeather />
        <StatusBar style='auto' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38181',
  },
});
