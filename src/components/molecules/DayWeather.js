import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SubInfo from '../organism/SubInfo';

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

export default function DayWeather({ days, handleLocation }) {
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
          <>
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
                <Text style={styles.descriptionTemp}>
                  {day.weather[0].main}
                </Text>
                <Text style={styles.weatherDescription}>
                  {tempText[day.weather[0].description]}
                </Text>
              </View>
              <View style={styles.subInfoContainer}>
                <SubInfo days={days} handleLocation={handleLocation} />
              </View>
            </View>
          </>
        ))
      )}
    </>
  );
}

const styles = StyleSheet.create({
  day: {
    marginTop: 50,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  // container
  mainContainer: {
    flexDirection: 'row',
  },
  descContainer: {
    flexDirection: 'row',
    width: '55%',
  },

  subInfoContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },

  // description
  dayTemp: {
    fontSize: 102,
    fontWeight: '600',
  },
  descriptionTemp: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
    color: 'black',
  },
  weatherDescription: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});
