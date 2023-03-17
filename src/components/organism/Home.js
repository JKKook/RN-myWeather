import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import City from '../atom/City';
import DayWeather from '../molecules/DayWeather';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <City />
        <ScrollView
          pagingEnabled // 좀 더 아이템들이 sticky하게 넘어가도록
          showsHorizontalScrollIndicator={false} // 아래 스크롤 움직이는 부분 제거
          horizontal={true}
          contentContainerStyle={styles.weather} // horizontal 할 때, flex가 지정되어 있는 경우 사이즈가 먹히지 않음
        >
          <DayWeather />
          <DayWeather />
          <DayWeather />
          <DayWeather />
          <DayWeather />
        </ScrollView>
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
  weather: {
    backgroundColor: 'pink',
  },
});
