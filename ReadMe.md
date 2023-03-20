# My-Weather App

### Period (23.03.17 ~ 23.03.20)

## Main Image

<img src="/assets/app.png" width="50%">
<img src="/assets/uvi.png" width="50%">

## description

### 1. UI Composition

Atomic Design을 바탕으로 구성했습니다
<img src="/assets/composition.png" width="100%">
<br>

### 2. Feature

<br>

#### 1) Location

<br>

- 라이브러리 설치

```Bash
npx expo install expo-location
```

- User에게 정보 제공에 따른 허가 요청

```js
requestForegroundPermissionsAsync();
```

- 현재 위치 정보 가져오기(option 포함)

```js
getCurrentPositionAsync()

return // 프로미스 반환
- coords : LocationObjectCoords // lat, lon
- timestamp : number
```

- 위도, 경로를 통한 현재 위치 값 얻기

```js
reverseGeocodeAsync()

return
    Promise<LocationGeocodeAddress[]>

// options : useGoogleMaps
// default : true , 현재 위치 정보를 반환할 때는 false로 변환해야 함
```

#### 2) openWeather API

<br>

```js
// Location 관련 코드
// getCurrentPosition을 통해 경도, 위도 값을 얻고 => reverseGeocode 매서드로 현재 위치 값을 얻음
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    setCity(location[0].city);


// 여기서부터 날씨 관련 코드
// 단, 위도와 경도 기본 정보가 필요 함
// 기타 옵션, metric : 캘빈 온도에서 섭씨 값으로 전환
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`,
    );
    const json = await response.json();
    setDays(json.daily);
  };
```

#### 3) Icons & replace text

```shell

1. 아이콘 : 다수의 Icons을 필요로 하고 해당 key에 맞는 value를 불러오고자 함
2. 텍스트 : 기존의 API를 lang 옵션으로 한국어로 변경했으나 오번역 되어서 표시 됨.
 ex) 튼구름, 온구름 ...
```

<br>

#### 아이콘과 텍스트 인터페이스화

```js

// 아이콘
// key : dayWeather.main
// value : expo-icons
const icons = {
  Clear: 'md-sunny',
  Clouds: 'cloudy',
  Rain: 'rainy',
  Snow: 'snow',
};


// 텍스트
// key: dayWeather.description
// value : 대체 텍스트
const tempText = {
  온흐림: '흐림',
  튼구름: '구름많음',
  맑음: '맑음',
  '실 비': '비',
};

return
    ...

// main의 배열의 값과 icons 객체의 key가 동일 시 되는 부분을 value로 값을 지정
    <Ionicons
     name={icons[day.weather[0].main]}
     size={56}
     color='black'
    />

// 대체 텍스트
    <Text style={styles.weatherDescription}>
     {tempText[day.weather[0].description]}
    </Text>
```

<br>

#### 4) 그 외 기능들

<br>

- 빈 배열일 경우, Loading 이미지 반환

```js
import {ActivityIndicator} from 'react-native';

 {days.length === 0 ? (
        <View style={styles.day}>
          <ActivityIndicator style={styles.day} size='large' color='#ffffff' />
        </View>
```

- uuid를 통한 unique key 형성

```js
import uuid from 'react-native-uuid';

        days.map((day) => (
          <View key={uuid.v4()} style={styles.day}>

```

- 자외선 지수 5.5이상 일 시, 경고 아이콘 🔥

<br>

## 프로젝트를 통한 역량

React-Native에 관심이 있어서 처음으로 다룬 프로젝트습니다.
리액트를 다룬 경험이 있기 때문에 나중에 기능 부분에서는 크게 어려움이 없었지만.

React와 차이점이 분명히 있었기에 초반에 차이점들을 파악하느라 다소 시간이 걸렸었던 것 같습니다.

이번 프로젝트를 통해 React-Native의 동작 원리와 Third-party를 활용하는 방식에 대해 학습할 수 있었습니다.

또한, Third-party의 라이브러리와 API의 사용법을 배웠고 기능 부분에서는 다량의 key, value값을 받아올 때는 타입스크립트 말고도 리액트에서도 interface화 하는 것이 효율적인 것을 깨달았습니다.

요컨대, 첫 프로젝트지만 크게 어렵지는 않은 프로젝트였다고 생각합니다. 하지만 처음 웹 사이트를 작업한 것처럼 App이란 비슷하지만 새로운 분야를 접하면서 초심의 '흥미'를 상기 시켰던 경험이었습니다.

<br>

## 아쉬운 점과 향후 계획

아직 리액트 네이티브 스타일링 부분이 헷갈리는 것 같습니다.
특히 Dimension과 ScrollView를 한 개 이상 활용해야할 시 스타일링이 뜻대로 되지 않는 것을 깨달았습니다.
이 부분은 지속적으로 학습하면서 점차 개선 시킬 생각입니다.

향후 해당 앱에서 추가하고 싶은 기능들이 있습니다.
먼저 현재 API말고 다른 방식으로 API 시간 대를 맞춰서, 몇날 며칠의 날인지를 표시하고자 합니다.

그리고, 다른 컴포넌트에서 Props를 전달 받아서 똑같이 배열 리소스를 얻었는데 연속 배열의 value를 얻지 못 해서 컴포넌트를 쪼개지 못 했습니다. 이 부분은 향후 마찬가지로 학습 이후에 개선할 예정입니다.

마지막으로, 배포할 수 있는 앱을 꼭! 만들어보고자 합니다.
