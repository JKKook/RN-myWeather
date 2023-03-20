import { StyleSheet, View, Text } from 'react-native';
import Uvi from '../atom/Uvi';
import Humidity from '../atom/Humidity';

export default function SubInfo({ days, handleLocation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.girdContainer}>
          <Uvi days={days} handleLocation={handleLocation} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#245953',
  },

  girdContainer: {
    flexDirection: 'row',
  },
});
