import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
// const  {width : SCREEN_WIDTH} = Dimensions.get('window')

export default function DayWeather({ days }) {
  console.log(
    '웨더 배열입니다',
    days.map((val) => val.weather),
  );
  return (
    <>
      {days.length === 0 ? (
        <View style={styles.day}>
          <ActivityIndicator style={styles.day} size='large' color='#ffffff' />
        </View>
      ) : (
        days.map((day, idx) => (
          <View key={idx} style={styles.day}>
            <Text style={styles.dayTemp}>
              {parseFloat(day.temp.day).toFixed(1)}℃
            </Text>
            <View style={styles.descContainer}>
              <Text style={styles.weatherDescription}>
                {day.weather[0].description}
              </Text>
              <Text style={styles.descriptionTemp}>{day.weather[0].main}</Text>
            </View>
            <Text style={styles.humidity}>
              습도 : {parseFloat(day.humidity).toFixed(1)}
            </Text>
          </View>
        ))
      )}
    </>
  );
}

const styles = StyleSheet.create({
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  descContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  dayTemp: {
    fontSize: 102,
    fontWeight: '600',
    marginTop: 50,
  },
  descriptionTemp: {
    fontSize: 26,
    fontWeight: '500',
    color: 'white',
  },
  weatherDescription: {
    fontSize: 26,
    fontWeight: '500',
    marginRight: 10,
    color: 'white',
  },
  humidity: {
    fontSize: 18,
    fontWeight: '500',
  },
});
