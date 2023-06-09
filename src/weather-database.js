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

// API 전체 정보
const api_all = {
  current: {
    clouds: 0,
    dew_point: -5.64,
    dt: 1679297432,
    feels_like: 12.63,
    humidity: 23,
    pressure: 1015,
    sunrise: 1679261868,
    sunset: 1679305415,
    temp: 14.52,
    uvi: 0.6,
    visibility: 10000,
    weather: [[Object]],
    wind_deg: 290,
    wind_speed: 5.66,
  },
  daily: [
    {
      clouds: 97,
      dew_point: -8.55,
      dt: 1679281200,
      feels_like: [Object],
      humidity: 25,
      moon_phase: 0.94,
      moonrise: 1679259540,
      moonset: 1679299200,
      pop: 0,
      pressure: 1018,
      sunrise: 1679261868,
      sunset: 1679305415,
      temp: [Object],
      uvi: 4.67,
      weather: [Array],
      wind_deg: 254,
      wind_gust: 3.71,
      wind_speed: 3.75,
    },
    {
      clouds: 0,
      dew_point: -10.35,
      dt: 1679367600,
      feels_like: [Object],
      humidity: 18,
      moon_phase: 0.98,
      moonrise: 1679347740,
      moonset: 1679389980,
      pop: 0,
      pressure: 1013,
      sunrise: 1679348177,
      sunset: 1679391870,
      temp: [Object],
      uvi: 5.5,
      weather: [Array],
      wind_deg: 299,
      wind_gust: 2.3,
      wind_speed: 2.14,
    },
    {
      clouds: 100,
      dew_point: -3.49,
      dt: 1679454000,
      feels_like: [Object],
      humidity: 25,
      moon_phase: 0,
      moonrise: 1679435880,
      moonset: 1679480700,
      pop: 0.96,
      pressure: 1007,
      rain: 2.04,
      sunrise: 1679434485,
      sunset: 1679478324,
      temp: [Object],
      uvi: 4.24,
      weather: [Array],
      wind_deg: 325,
      wind_gust: 6.39,
      wind_speed: 3.24,
    },
    {
      clouds: 71,
      dew_point: -6.67,
      dt: 1679540400,
      feels_like: [Object],
      humidity: 21,
      moon_phase: 0.05,
      moonrise: 1679523900,
      moonset: 1679571300,
      pop: 0.04,
      pressure: 1013,
      sunrise: 1679520793,
      sunset: 1679564778,
      temp: [Object],
      uvi: 5.75,
      weather: [Array],
      wind_deg: 331,
      wind_gust: 12.57,
      wind_speed: 7.28,
    },
    {
      clouds: 100,
      dew_point: -16,
      dt: 1679626800,
      feels_like: [Object],
      humidity: 17,
      moon_phase: 0.09,
      moonrise: 1679611920,
      moonset: 1679661900,
      pop: 0,
      pressure: 1021,
      sunrise: 1679607102,
      sunset: 1679651231,
      temp: [Object],
      uvi: 4.99,
      weather: [Array],
      wind_deg: 323,
      wind_gust: 11.88,
      wind_speed: 6.03,
    },
    {
      clouds: 100,
      dew_point: -6.37,
      dt: 1679713200,
      feels_like: [Object],
      humidity: 27,
      moon_phase: 0.12,
      moonrise: 1679700120,
      moonset: 1679752380,
      pop: 0,
      pressure: 1022,
      sunrise: 1679693410,
      sunset: 1679737685,
      temp: [Object],
      uvi: 5,
      weather: [Array],
      wind_deg: 203,
      wind_gust: 6.45,
      wind_speed: 3.38,
    },
    {
      clouds: 100,
      dew_point: 1.77,
      dt: 1679799600,
      feels_like: [Object],
      humidity: 65,
      moon_phase: 0.16,
      moonrise: 1679788500,
      moonset: 1679842800,
      pop: 0.28,
      pressure: 1016,
      rain: 0.14,
      sunrise: 1679779719,
      sunset: 1679824139,
      temp: [Object],
      uvi: 5,
      weather: [Array],
      wind_deg: 283,
      wind_gust: 10.99,
      wind_speed: 7.69,
    },
    {
      clouds: 0,
      dew_point: -8.72,
      dt: 1679886000,
      feels_like: [Object],
      humidity: 27,
      moon_phase: 0.19,
      moonrise: 1679877240,
      moonset: 0,
      pop: 0,
      pressure: 1018,
      sunrise: 1679866027,
      sunset: 1679910592,
      temp: [Object],
      uvi: 5,
      weather: [Array],
      wind_deg: 293,
      wind_gust: 14.1,
      wind_speed: 7.22,
    },
  ],
  hourly: [
    {
      clouds: 1,
      dew_point: -6.08,
      dt: 1679295600,
      feels_like: 11.98,
      humidity: 23,
      pop: 0,
      pressure: 1015,
      temp: 13.93,
      uvi: 1.56,
      visibility: 10000,
      weather: [Array],
      wind_deg: 264,
      wind_gust: 3.52,
      wind_speed: 3.45,
    },
    {
      clouds: 0,
      dew_point: -5.64,
      dt: 1679299200,
      feels_like: 12.63,
      humidity: 23,
      pop: 0,
      pressure: 1015,
      temp: 14.52,
      uvi: 0.6,
      visibility: 10000,
      weather: [Array],
      wind_deg: 275,
      wind_gust: 3.51,
      wind_speed: 3.18,
    },
    {
      clouds: 1,
      dew_point: -5.78,
      dt: 1679302800,
      feels_like: 11.73,
      humidity: 24,
      pop: 0,
      pressure: 1015,
      temp: 13.68,
      uvi: 0.12,
      visibility: 10000,
      weather: [Array],
      wind_deg: 270,
      wind_gust: 2.7,
      wind_speed: 2.42,
    },
    {
      clouds: 1,
      dew_point: -5.74,
      dt: 1679306400,
      feels_like: 10.48,
      humidity: 26,
      pop: 0,
      pressure: 1015,
      temp: 12.5,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 269,
      wind_gust: 3.5,
      wind_speed: 2.7,
    },
    {
      clouds: 4,
      dew_point: -5.76,
      dt: 1679310000,
      feels_like: 9.28,
      humidity: 28,
      pop: 0,
      pressure: 1016,
      temp: 11.36,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 285,
      wind_gust: 1.6,
      wind_speed: 1.26,
    },
    {
      clouds: 18,
      dew_point: -6.14,
      dt: 1679313600,
      feels_like: 8.18,
      humidity: 29,
      pop: 0,
      pressure: 1015,
      temp: 10.33,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 323,
      wind_gust: 0.55,
      wind_speed: 0.37,
    },
    {
      clouds: 89,
      dew_point: -7.94,
      dt: 1679317200,
      feels_like: 9.11,
      humidity: 30,
      pop: 0,
      pressure: 1016,
      temp: 9.11,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 254,
      wind_gust: 0.84,
      wind_speed: 0.87,
    },
    {
      clouds: 63,
      dew_point: -7.83,
      dt: 1679320800,
      feels_like: 8.71,
      humidity: 31,
      pop: 0,
      pressure: 1016,
      temp: 8.71,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 225,
      wind_gust: 1.11,
      wind_speed: 1.17,
    },
    {
      clouds: 74,
      dew_point: -7.52,
      dt: 1679324400,
      feels_like: 7.82,
      humidity: 32,
      pop: 0,
      pressure: 1015,
      temp: 8.34,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 226,
      wind_gust: 1.63,
      wind_speed: 1.44,
    },
    {
      clouds: 80,
      dew_point: -7.01,
      dt: 1679328000,
      feels_like: 8,
      humidity: 34,
      pop: 0,
      pressure: 1016,
      temp: 8,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 268,
      wind_gust: 1.3,
      wind_speed: 1.29,
    },
    {
      clouds: 73,
      dew_point: -6.69,
      dt: 1679331600,
      feels_like: 7.63,
      humidity: 36,
      pop: 0,
      pressure: 1016,
      temp: 7.63,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 250,
      wind_gust: 1,
      wind_speed: 1.03,
    },
    {
      clouds: 62,
      dew_point: -6.68,
      dt: 1679335200,
      feels_like: 7.43,
      humidity: 37,
      pop: 0,
      pressure: 1016,
      temp: 7.43,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 336,
      wind_gust: 0.71,
      wind_speed: 0.65,
    },
    {
      clouds: 84,
      dew_point: -7.13,
      dt: 1679338800,
      feels_like: 7.29,
      humidity: 36,
      pop: 0,
      pressure: 1015,
      temp: 7.29,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 28,
      wind_gust: 0.81,
      wind_speed: 0.83,
    },
    {
      clouds: 43,
      dew_point: -7.66,
      dt: 1679342400,
      feels_like: 7.19,
      humidity: 34,
      pop: 0,
      pressure: 1015,
      temp: 7.19,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 60,
      wind_gust: 1.11,
      wind_speed: 1.09,
    },
    {
      clouds: 30,
      dew_point: -8.12,
      dt: 1679346000,
      feels_like: 7.09,
      humidity: 33,
      pop: 0,
      pressure: 1015,
      temp: 7.09,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 65,
      wind_gust: 0.92,
      wind_speed: 0.95,
    },
    {
      clouds: 23,
      dew_point: -8.64,
      dt: 1679349600,
      feels_like: 7.11,
      humidity: 32,
      pop: 0,
      pressure: 1015,
      temp: 7.11,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 71,
      wind_gust: 0.9,
      wind_speed: 0.85,
    },
    {
      clouds: 19,
      dew_point: -9.09,
      dt: 1679353200,
      feels_like: 8.06,
      humidity: 29,
      pop: 0,
      pressure: 1015,
      temp: 8.06,
      uvi: 0.53,
      visibility: 10000,
      weather: [Array],
      wind_deg: 117,
      wind_gust: 1.21,
      wind_speed: 1.01,
    },
    {
      clouds: 15,
      dew_point: -9.84,
      dt: 1679356800,
      feels_like: 9.58,
      humidity: 25,
      pop: 0,
      pressure: 1015,
      temp: 9.58,
      uvi: 1.52,
      visibility: 10000,
      weather: [Array],
      wind_deg: 104,
      wind_gust: 1.9,
      wind_speed: 1.15,
    },
    {
      clouds: 0,
      dew_point: -10.24,
      dt: 1679360400,
      feels_like: 8.83,
      humidity: 22,
      pop: 0,
      pressure: 1015,
      temp: 11.09,
      uvi: 2.98,
      visibility: 10000,
      weather: [Array],
      wind_deg: 114,
      wind_gust: 1.91,
      wind_speed: 1.24,
    },
    {
      clouds: 0,
      dew_point: -10.26,
      dt: 1679364000,
      feels_like: 10.54,
      humidity: 20,
      pop: 0,
      pressure: 1015,
      temp: 12.69,
      uvi: 4.39,
      visibility: 10000,
      weather: [Array],
      wind_deg: 131,
      wind_gust: 2.2,
      wind_speed: 1.3,
    },
    {
      clouds: 0,
      dew_point: -10.35,
      dt: 1679367600,
      feels_like: 12.12,
      humidity: 18,
      pop: 0,
      pressure: 1013,
      temp: 14.18,
      uvi: 5.3,
      visibility: 10000,
      weather: [Array],
      wind_deg: 107,
      wind_gust: 2.3,
      wind_speed: 1.39,
    },
    {
      clouds: 1,
      dew_point: -10.45,
      dt: 1679371200,
      feels_like: 13.63,
      humidity: 16,
      pop: 0,
      pressure: 1013,
      temp: 15.6,
      uvi: 5.5,
      visibility: 10000,
      weather: [Array],
      wind_deg: 116,
      wind_gust: 2.11,
      wind_speed: 1.24,
    },
    {
      clouds: 1,
      dew_point: -10.53,
      dt: 1679374800,
      feels_like: 14.76,
      humidity: 15,
      pop: 0,
      pressure: 1012,
      temp: 16.65,
      uvi: 4.67,
      visibility: 10000,
      weather: [Array],
      wind_deg: 195,
      wind_gust: 1.4,
      wind_speed: 0.66,
    },
    {
      clouds: 2,
      dew_point: -10.44,
      dt: 1679378400,
      feels_like: 15.1,
      humidity: 15,
      pop: 0,
      pressure: 1011,
      temp: 16.96,
      uvi: 3.25,
      visibility: 10000,
      weather: [Array],
      wind_deg: 254,
      wind_gust: 1.51,
      wind_speed: 1.39,
    },
    {
      clouds: 3,
      dew_point: -9.97,
      dt: 1679382000,
      feels_like: 15.09,
      humidity: 16,
      pop: 0,
      pressure: 1011,
      temp: 16.92,
      uvi: 1.79,
      visibility: 10000,
      weather: [Array],
      wind_deg: 294,
      wind_gust: 1.12,
      wind_speed: 1.87,
    },
    {
      clouds: 51,
      dew_point: -9.64,
      dt: 1679385600,
      feels_like: 14.48,
      humidity: 17,
      pop: 0,
      pressure: 1011,
      temp: 16.35,
      uvi: 0.68,
      visibility: 10000,
      weather: [Array],
      wind_deg: 299,
      wind_gust: 1.4,
      wind_speed: 2.14,
    },
    {
      clouds: 67,
      dew_point: -9.66,
      dt: 1679389200,
      feels_like: 13.86,
      humidity: 17,
      pop: 0,
      pressure: 1011,
      temp: 15.78,
      uvi: 0.14,
      visibility: 10000,
      weather: [Array],
      wind_deg: 319,
      wind_gust: 1.99,
      wind_speed: 2.03,
    },
    {
      clouds: 70,
      dew_point: -9.63,
      dt: 1679392800,
      feels_like: 13.16,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 15.12,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 310,
      wind_gust: 1.61,
      wind_speed: 1.37,
    },
    {
      clouds: 76,
      dew_point: -9.75,
      dt: 1679396400,
      feels_like: 12.7,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 14.7,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 318,
      wind_gust: 1.2,
      wind_speed: 1.16,
    },
    {
      clouds: 80,
      dew_point: -9.74,
      dt: 1679400000,
      feels_like: 12.35,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 14.39,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 344,
      wind_gust: 1.23,
      wind_speed: 1.25,
    },
    {
      clouds: 73,
      dew_point: -9.93,
      dt: 1679403600,
      feels_like: 12.13,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 14.19,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 12,
      wind_gust: 1.71,
      wind_speed: 1.73,
    },
    {
      clouds: 87,
      dew_point: -10.32,
      dt: 1679407200,
      feels_like: 11.83,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 13.91,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 25,
      wind_gust: 1.9,
      wind_speed: 1.95,
    },
    {
      clouds: 91,
      dew_point: -10.72,
      dt: 1679410800,
      feels_like: 11.39,
      humidity: 18,
      pop: 0,
      pressure: 1011,
      temp: 13.51,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 31,
      wind_gust: 1.31,
      wind_speed: 1.29,
    },
    {
      clouds: 93,
      dew_point: -11.19,
      dt: 1679414400,
      feels_like: 11.23,
      humidity: 17,
      pop: 0,
      pressure: 1010,
      temp: 13.39,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 50,
      wind_gust: 1.41,
      wind_speed: 1.39,
    },
    {
      clouds: 93,
      dew_point: -11.51,
      dt: 1679418000,
      feels_like: 10.93,
      humidity: 17,
      pop: 0,
      pressure: 1010,
      temp: 13.12,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 37,
      wind_gust: 1.4,
      wind_speed: 1.44,
    },
    {
      clouds: 94,
      dew_point: -11.39,
      dt: 1679421600,
      feels_like: 10.69,
      humidity: 18,
      pop: 0,
      pressure: 1010,
      temp: 12.88,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 25,
      wind_gust: 1.81,
      wind_speed: 1.86,
    },
    {
      clouds: 100,
      dew_point: -11.1,
      dt: 1679425200,
      feels_like: 10.95,
      humidity: 18,
      pop: 0,
      pressure: 1009,
      temp: 13.11,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 43,
      wind_gust: 2.98,
      wind_speed: 2.26,
    },
    {
      clouds: 100,
      dew_point: -10.47,
      dt: 1679428800,
      feels_like: 10.43,
      humidity: 19,
      pop: 0,
      pressure: 1009,
      temp: 12.62,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 56,
      wind_gust: 2.5,
      wind_speed: 2.28,
    },
    {
      clouds: 100,
      dew_point: -9.2,
      dt: 1679432400,
      feels_like: 10.41,
      humidity: 21,
      pop: 0,
      pressure: 1008,
      temp: 12.55,
      uvi: 0,
      visibility: 10000,
      weather: [Array],
      wind_deg: 55,
      wind_gust: 1.81,
      wind_speed: 1.81,
    },
    {
      clouds: 100,
      dew_point: -8.08,
      dt: 1679436000,
      feels_like: 10.56,
      humidity: 23,
      pop: 0,
      pressure: 1009,
      temp: 12.64,
      uvi: 0.03,
      visibility: 10000,
      weather: [Array],
      wind_deg: 52,
      wind_gust: 1.3,
      wind_speed: 1.25,
    },
    {
      clouds: 100,
      dew_point: -7.18,
      dt: 1679439600,
      feels_like: 10.91,
      humidity: 24,
      pop: 0,
      pressure: 1009,
      temp: 12.93,
      uvi: 0.18,
      visibility: 10000,
      weather: [Array],
      wind_deg: 39,
      wind_gust: 2.01,
      wind_speed: 1.89,
    },
    {
      clouds: 100,
      dew_point: -6.58,
      dt: 1679443200,
      feels_like: 11.15,
      humidity: 25,
      pop: 0,
      pressure: 1009,
      temp: 13.13,
      uvi: 0.5,
      visibility: 10000,
      weather: [Array],
      wind_deg: 32,
      wind_gust: 3.89,
      wind_speed: 2.39,
    },
    {
      clouds: 100,
      dew_point: -5.78,
      dt: 1679446800,
      feels_like: 11.86,
      humidity: 26,
      pop: 0,
      pressure: 1008,
      temp: 13.75,
      uvi: 2.37,
      visibility: 10000,
      weather: [Array],
      wind_deg: 63,
      wind_gust: 3.2,
      wind_speed: 1.74,
    },
    {
      clouds: 100,
      dew_point: -4.39,
      dt: 1679450400,
      feels_like: 13.92,
      humidity: 25,
      pop: 0,
      pressure: 1007,
      temp: 15.65,
      uvi: 3.51,
      visibility: 10000,
      weather: [Array],
      wind_deg: 69,
      wind_gust: 3.89,
      wind_speed: 2.23,
    },
    {
      clouds: 100,
      dew_point: -3.49,
      dt: 1679454000,
      feels_like: 15.24,
      humidity: 25,
      pop: 0,
      pressure: 1007,
      temp: 16.85,
      uvi: 4.24,
      visibility: 10000,
      weather: [Array],
      wind_deg: 58,
      wind_gust: 3.99,
      wind_speed: 2.4,
    },
    {
      clouds: 100,
      dew_point: -2.48,
      dt: 1679457600,
      feels_like: 16.7,
      humidity: 25,
      pop: 0,
      pressure: 1006,
      temp: 18.17,
      uvi: 1.88,
      visibility: 10000,
      weather: [Array],
      wind_deg: 40,
      wind_gust: 3.88,
      wind_speed: 2.74,
    },
    {
      clouds: 100,
      dew_point: -1.58,
      dt: 1679461200,
      feels_like: 17.23,
      humidity: 25,
      pop: 0.04,
      pressure: 1005,
      temp: 18.66,
      uvi: 1.6,
      visibility: 10000,
      weather: [Array],
      wind_deg: 66,
      wind_gust: 3.11,
      wind_speed: 2.22,
    },
    {
      clouds: 100,
      dew_point: -1.26,
      dt: 1679464800,
      feels_like: 16.89,
      humidity: 27,
      pop: 0.08,
      pressure: 1005,
      temp: 18.3,
      uvi: 1.11,
      visibility: 10000,
      weather: [Array],
      wind_deg: 150,
      wind_gust: 1.01,
      wind_speed: 0.65,
    },
  ],
  lat: 37.5035,
  lon: 126.7511,
  minutely: [
    { dt: 1679297460, precipitation: 0 },
    { dt: 1679297520, precipitation: 0 },
    { dt: 1679297580, precipitation: 0 },
    { dt: 1679297640, precipitation: 0 },
    { dt: 1679297700, precipitation: 0 },
    { dt: 1679297760, precipitation: 0 },
    { dt: 1679297820, precipitation: 0 },
    { dt: 1679297880, precipitation: 0 },
    { dt: 1679297940, precipitation: 0 },
    { dt: 1679298000, precipitation: 0 },
    { dt: 1679298060, precipitation: 0 },
    { dt: 1679298120, precipitation: 0 },
    { dt: 1679298180, precipitation: 0 },
    { dt: 1679298240, precipitation: 0 },
    { dt: 1679298300, precipitation: 0 },
    { dt: 1679298360, precipitation: 0 },
    { dt: 1679298420, precipitation: 0 },
    { dt: 1679298480, precipitation: 0 },
    { dt: 1679298540, precipitation: 0 },
    { dt: 1679298600, precipitation: 0 },
    { dt: 1679298660, precipitation: 0 },
    { dt: 1679298720, precipitation: 0 },
    { dt: 1679298780, precipitation: 0 },
    { dt: 1679298840, precipitation: 0 },
    { dt: 1679298900, precipitation: 0 },
    { dt: 1679298960, precipitation: 0 },
    { dt: 1679299020, precipitation: 0 },
    { dt: 1679299080, precipitation: 0 },
    { dt: 1679299140, precipitation: 0 },
    { dt: 1679299200, precipitation: 0 },
    { dt: 1679299260, precipitation: 0 },
    { dt: 1679299320, precipitation: 0 },
    { dt: 1679299380, precipitation: 0 },
    { dt: 1679299440, precipitation: 0 },
    { dt: 1679299500, precipitation: 0 },
    { dt: 1679299560, precipitation: 0 },
    { dt: 1679299620, precipitation: 0 },
    { dt: 1679299680, precipitation: 0 },
    { dt: 1679299740, precipitation: 0 },
    { dt: 1679299800, precipitation: 0 },
    { dt: 1679299860, precipitation: 0 },
    { dt: 1679299920, precipitation: 0 },
    { dt: 1679299980, precipitation: 0 },
    { dt: 1679300040, precipitation: 0 },
    { dt: 1679300100, precipitation: 0 },
    { dt: 1679300160, precipitation: 0 },
    { dt: 1679300220, precipitation: 0 },
    { dt: 1679300280, precipitation: 0 },
    { dt: 1679300340, precipitation: 0 },
    { dt: 1679300400, precipitation: 0 },
    { dt: 1679300460, precipitation: 0 },
    { dt: 1679300520, precipitation: 0 },
    { dt: 1679300580, precipitation: 0 },
    { dt: 1679300640, precipitation: 0 },
    { dt: 1679300700, precipitation: 0 },
    { dt: 1679300760, precipitation: 0 },
    { dt: 1679300820, precipitation: 0 },
    { dt: 1679300880, precipitation: 0 },
    { dt: 1679300940, precipitation: 0 },
    { dt: 1679301000, precipitation: 0 },
    { dt: 1679301060, precipitation: 0 },
  ],
  timezone: 'Asia/Seoul',
  timezone_offset: 32400,
};
