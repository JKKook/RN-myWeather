import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Humidity({ days }) {
  return (
    <>
      {days === undefined || null
        ? ''
        : days.map((day, idx) => (
            <>
              <View key={idx} style={styles.day}>
                <View style={styles.uviContainer}>
                  <FontAwesome name='sun-o' size={24} color='black' />
                  <Text>자외선 지수</Text>
                  <Text>{parseFloat(day.humidity).toFixed(1)}</Text>
                </View>
              </View>
            </>
          ))}
    </>
  );
}

const styles = StyleSheet.create({
  day: {
    marginTop: 50,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  uviContainer: {
    marginTop: 10,
    fontSize: 24,
    borderStyle: 'solid',
    borderWidth: 5,
    padding: 50,
  },
});
