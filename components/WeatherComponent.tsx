import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import DateTime from './DateTime';
import WeatherScroll from './WeatherScroll';
import { useDispatch, useSelector } from 'react-redux';
const img = require('../assets/image.png');

const WeatherComponent = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <DateTime
          current={store?.data?.current}
          timezone={store?.data?.timezone}
          lat={store?.data?.lat}
          lon={store?.data?.lon}
        />

        <WeatherScroll weatherData={store?.data.daily} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
});

export default WeatherComponent;
