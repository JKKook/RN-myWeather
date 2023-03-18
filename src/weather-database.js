// 그 날의 날씨 정보를 담은 데이터 입니다
const data_daily = [
  {
    clouds: 100,
    dew_point: -10.22,
    dt: 1679108400,
    feels_like: { day: 7.89, eve: 8.28, morn: 3.08, night: 5.31 },
    humidity: 24,
    moon_phase: 0.86,
    moonrise: 1679082120,
    moonset: 1679117160,
    pop: 0,
    pressure: 1020,
    sunrise: 1679089251,
    sunset: 1679132507,
    temp: {
      day: 9.7,
      eve: 10.16,
      max: 10.67,
      min: 4.65,
      morn: 4.95,
      night: 6.9,
    },
    uvi: 4.42,
    weather: [[Object]],
    wind_deg: 263,
    wind_gust: 7.62,
    wind_speed: 6.18,
  },
  {
    clouds: 0,
    dew_point: -3.07,
    dt: 1679194800,
    feels_like: { day: 8.29, eve: 7.5, morn: 5.25, night: 6.51 },
    humidity: 41,
    moon_phase: 0.9,
    moonrise: 1679171040,
    moonset: 1679208240,
    pop: 0,
    pressure: 1022,
    sunrise: 1679175560,
    sunset: 1679218961,
    temp: {
      day: 9.78,
      eve: 9.22,
      max: 10.3,
      min: 5.18,
      morn: 5.25,
      night: 7.16,
    },
    uvi: 4.56,
    weather: [[Object]],
    wind_deg: 247,
    wind_gust: 4.6,
    wind_speed: 4.08,
  },
  {
    clouds: 100,
    dew_point: -6.47,
    dt: 1679281200,
    feels_like: { day: 8.29, eve: 8.38, morn: 5.89, night: 8.44 },
    humidity: 31,
    moon_phase: 0.94,
    moonrise: 1679259540,
    moonset: 1679299200,
    pop: 0,
    pressure: 1018,
    sunrise: 1679261868,
    sunset: 1679305416,
    temp: {
      day: 10.39,
      eve: 10.59,
      max: 11.59,
      min: 5.89,
      morn: 5.89,
      night: 8.44,
    },
    uvi: 4.13,
    weather: [[Object]],
    wind_deg: 275,
    wind_gust: 3.01,
    wind_speed: 3.13,
  },
  {
    clouds: 100,
    dew_point: -5.8,
    dt: 1679367600,
    feels_like: { day: 10.84, eve: 13.51, morn: 7.35, night: 11.77 },
    humidity: 27,
    moon_phase: 0.98,
    moonrise: 1679347740,
    moonset: 1679389980,
    pop: 0.08,
    pressure: 1014,
    sunrise: 1679348177,
    sunset: 1679391870,
    temp: {
      day: 12.8,
      eve: 15.27,
      max: 15.45,
      min: 7.35,
      morn: 7.35,
      night: 13.62,
    },
    uvi: 4.26,
    weather: [[Object]],
    wind_deg: 54,
    wind_gust: 3.12,
    wind_speed: 2.32,
  },
  {
    clouds: 100,
    dew_point: -1.76,
    dt: 1679454000,
    feels_like: { day: 11.8, eve: 12.98, morn: 10.76, night: 11.15 },
    humidity: 35,
    moon_phase: 0,
    moonrise: 1679435880,
    moonset: 1679480700,
    pop: 0.08,
    pressure: 1009,
    sunrise: 1679434486,
    sunset: 1679478324,
    temp: {
      day: 13.48,
      eve: 14.1,
      max: 14.75,
      min: 12.3,
      morn: 12.56,
      night: 12.44,
    },
    uvi: 5.07,
    weather: [[Object]],
    wind_deg: 345,
    wind_gust: 6.3,
    wind_speed: 3.32,
  },
  {
    clouds: 100,
    dew_point: -5.06,
    dt: 1679540400,
    feels_like: { day: 13.42, eve: 13.78, morn: 8.53, night: 9.91 },
    humidity: 24,
    moon_phase: 0.05,
    moonrise: 1679523900,
    moonset: 1679571300,
    pop: 0,
    pressure: 1014,
    sunrise: 1679520794,
    sunset: 1679564778,
    temp: {
      day: 15.22,
      eve: 15.76,
      max: 17.35,
      min: 9.13,
      morn: 9.51,
      night: 12.14,
    },
    uvi: 6,
    weather: [[Object]],
    wind_deg: 334,
    wind_gust: 12.3,
    wind_speed: 6.71,
  },
  {
    clouds: 100,
    dew_point: -18.46,
    dt: 1679626800,
    feels_like: { day: 9.56, eve: 9.67, morn: 4.4, night: 4.57 },
    humidity: 11,
    moon_phase: 0.09,
    moonrise: 1679611920,
    moonset: 1679661900,
    pop: 0,
    pressure: 1022,
    sunrise: 1679607102,
    sunset: 1679651232,
    temp: { day: 12.02, eve: 12, max: 13.92, min: 7.6, morn: 7.6, night: 7.85 },
    uvi: 6,
    weather: [[Object]],
    wind_deg: 334,
    wind_gust: 14.12,
    wind_speed: 6.7,
  },
  {
    clouds: 100,
    dew_point: -10.67,
    dt: 1679713200,
    feels_like: { day: 7.49, eve: 9.82, morn: 1.88, night: 8.96 },
    humidity: 24,
    moon_phase: 0.12,
    moonrise: 1679700120,
    moonset: 1679752380,
    pop: 0,
    pressure: 1024,
    sunrise: 1679693411,
    sunset: 1679737686,
    temp: {
      day: 9.22,
      eve: 11.71,
      max: 12.29,
      min: 4.98,
      morn: 4.98,
      night: 10.69,
    },
    uvi: 6,
    weather: [[Object]],
    wind_deg: 322,
    wind_gust: 9.73,
    wind_speed: 5.6,
  },
];

// 웨더 오브젝트 정보
const object_weather = [
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'clear sky', icon: '01d', id: 800, main: 'Clear' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
  [{ description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds' }],
];