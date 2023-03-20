import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
//같은 처리 : const  {width : SCREEN_WIDTH} = Dimensions.get('window')

const icons = {
  Clear: 'md-sunny',
  Clouds: 'cloudy',
  Rain: 'rainy',
  Snow: 'snow',
};

const tempText = {
  온흐림: '흐림',
  튼구름: '구름많음',
  맑음: '맑음',
  '실 비': '비',
};

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
            <View style={styles.mainContainer}>
              <Text style={styles.dayTemp}>
                {parseFloat(day.temp.day).toFixed(0)}℃
              </Text>
              <Ionicons
                name={icons[day.weather[0].main]}
                size={56}
                color='black'
              />
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.descriptionTemp}>{day.weather[0].main}</Text>
              <Text style={styles.weatherDescription}>
                {tempText[day.weather[0].description]}
              </Text>
            </View>
            <View style={styles.secondDescContainer}>
              <Text style={styles.humidity}>
                {parseFloat(day.humidity).toFixed(0)}%
              </Text>
              <Ionicons name='water' size={28} color='white' />
            </View>
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
  mainContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  descContainer: {
    flexDirection: 'row',
    width: '55%',
    marginTop: 10,
  },
  secondDescContainer: {
    flexDirection: 'row',
    width: '55%',
    marginTop: 10,
  },
  dayTemp: {
    fontSize: 102,
    fontWeight: '600',
  },
  descriptionTemp: {
    fontSize: 26,
    fontWeight: '500',
    marginRight: 10,
    color: 'white',
  },
  weatherDescription: {
    fontSize: 26,
    fontWeight: '500',
    marginRight: 30,
    color: 'white',
  },
  humidity: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    marginRight: 10,
  },
});
