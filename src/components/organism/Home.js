import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import City from '../atom/City';
import DayWeather from '../molecules/DayWeather';
import SubInfo from './SubInfo';

const API_KEY = '370a982a2eddb9816742fae0e3535a0c';

export default function Home() {
  const [city, setCity] = useState('...Loading');
  const [checkStatus, setCheckStatus] = useState('');
  const [days, setDays] = useState([]);
  const [date, setDate] = useState([]);

  const handleLocation = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission !== 'granted') {
      setCheckStatus(`요청이 거부되었습니다. 설정을 확인해주세요 🙇‍♂️`);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric&lang=kr`,
    );

    const json = await response.json();
    setDays(json.daily);
    setDate(json);
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <City city={city} days={days} handleLocation={handleLocation} />
        <ScrollView
          pagingEnabled // 좀 더 아이템들이 sticky하게 넘어가도록
          showsHorizontalScrollIndicator={false} // 아래 스크롤 움직이는 부분 제거
          horizontal={true}
          contentContainerStyle={styles.weather} // horizontal 할 때, flex가 지정되어 있는 경우 사이즈가 먹히지 않음
        >
          <DayWeather days={days} handleLocation={handleLocation} />
        </ScrollView>
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
