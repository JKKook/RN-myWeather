import { StyleSheet, Text, View } from 'react-native';

export default function City() {
  return (
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
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
