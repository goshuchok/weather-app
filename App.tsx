import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';
import * as Location from 'expo-location';
// import Geolocation from '@react-native-community/geolocation'
const img = require('./assets/image.png');

const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

type AppState = {
  current: {
    temp: number;
    humidity?: any;
    pressure?: any;
    sunset: any;
    sunrise: any;
  };
  timezone: string;
  lat: string;
  lon: string;
  temp: string | number;
  daily: {};
};

export default function App() {
  const [data, setData] = useState<AppState>({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi('40.7128', '-74.0060');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (
    latitude: string | number,
    longitude: string | number
  ) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <DateTime
          current={data?.current}
          timezone={data?.timezone}
          lat={data?.lat}
          lon={data?.lon}
        />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
});
