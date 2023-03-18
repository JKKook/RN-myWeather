import { StyleSheet, Text, View } from 'react-native';

export default function City({ city }) {
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
