import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Uvi({ days }) {
  //   console.log(days.map((val) => val.uvi));

  return (
    <>
      {days === undefined || null
        ? ''
        : days.map((day, idx) => (
            <>
              <View key={idx} style={styles.day}>
                <View style={styles.container}>
                  <View style={styles.infoContainer}>
                    <FontAwesome name='sun-o' size={42} color='#FFD966' />
                    <Text style={styles.infoTitle}>자외선 지수</Text>
                    <Text>{parseFloat(day.uvi).toFixed(1)}</Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Ionicons name='water' size={42} color='white' />
                    <Text style={styles.infoTitle}>습도 RH</Text>
                    <Text>{parseFloat(day.humidity).toFixed(0)}%</Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <View style={styles.infoContainer}>
                    <MaterialCommunityIcons
                      name='weather-windy'
                      size={42}
                      color='white'
                    />
                    <Text style={styles.infoTitle}>바람</Text>
                    <Text>{parseFloat(day.wind_speed).toFixed(0)}m/s</Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <FontAwesome name='sun-o' size={42} color='white' />
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={styles.infoTitle}>최대 온도</Text>
                      <Text style={styles.infoSubText}>
                        {parseFloat(day.temp.max).toFixed(0)}℃
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={styles.infoTitle}>최저 온도</Text>
                      <Text style={styles.infoSubText}>
                        {parseFloat(day.temp.min).toFixed(0)}℃
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </>
          ))}
    </>
  );
}

const styles = StyleSheet.create({
  day: {
    marginTop: 5,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    fontSize: 24,
    borderStyle: 'solid',
  },
  infoContainer: {
    width: '40%',
    borderWidth: 5,
    borderRadius: 30,
    padding: 35,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 600,
  },
  infoSubText: {
    marginLeft: 5,
  },
});
