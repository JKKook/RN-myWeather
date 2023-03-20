import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import uuid from 'react-native-uuid';

console.log('uuid', uuid.v4());

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SubInfoBlock({ days, handleLocation }) {
  return (
    <>
      {days.length === 0
        ? alert('something wrong')
        : days.map((day) => (
            <View key={uuid.v4()} style={styles.day}>
              <View style={styles.container}>
                <View style={styles.infoContainer}>
                  <FontAwesome name='sun-o' size={42} color='#FFD966' />
                  <Text style={styles.infoTitle}>자외선 지수</Text>
                  {parseFloat(day.uvi).toFixed(2) > 6.0 ? (
                    <Text style={styles.infoUnit}>
                      {parseFloat(day.uvi).toFixed(2)}
                    </Text>
                  ) : (
                    <Text style={{ ...styles.infoUnit, color: 'red' }}>
                      {parseFloat(day.uvi).toFixed(1)}
                    </Text>
                  )}
                </View>
                <View style={styles.infoContainer}>
                  <Ionicons name='water' size={42} color='#BCCEF8' />
                  <Text style={styles.infoTitle}>습도 RH</Text>
                  <Text style={styles.infoUnit}>
                    {parseFloat(day.humidity).toFixed(0)}%
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.infoContainer}>
                  <MaterialCommunityIcons
                    name='weather-windy'
                    size={42}
                    color='#146C94'
                  />
                  <Text style={styles.infoTitle}>바람</Text>
                  <Text style={styles.infoUnit}>
                    {parseFloat(day.wind_speed).toFixed(0)}m/s
                  </Text>
                </View>
                <View style={styles.infoContainer}>
                  <FontAwesome5
                    name='temperature-high'
                    size={42}
                    color='#EA5455'
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginLeft: 20,
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Text style={{ ...styles.infoSubTitle, marginTop: 10 }}>
                      최대
                    </Text>
                    <Text style={{ ...styles.infoSubText, marginTop: 10 }}>
                      {parseFloat(day.temp.max).toFixed(0)}℃
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginLeft: 20,
                      width: '100%',
                    }}
                  >
                    <Text style={styles.infoSubTitle}>최저</Text>
                    <Text style={styles.infoSubText}>
                      {parseFloat(day.temp.min).toFixed(0)}℃
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
  },
  infoContainer: {
    width: '40%',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '#E4D0D0',
    borderWidth: 5,
    borderRadius: 30,
    padding: 35,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 600,
  },
  infoUnit: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoSubTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  infoSubText: {
    marginLeft: 5,
  },
});
