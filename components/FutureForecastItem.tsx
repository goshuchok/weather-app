import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

type FutureForecastItemProps = {
  forecastItem: {
    dt: number;
    weather: any;
    temp: {
      night: string;
      day: string;
    };
  };
};

const FutureForecastItem: React.FC<FutureForecastItemProps> = ({
  forecastItem,
}) => {
  const img = {
    uri:
      'http://openweathermap.org/img/wn/' +
      forecastItem.weather[0].icon +
      '@2x.png',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format('ddd')}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    flex: 1,
  },
  day: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#3c3c44',
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 15,
    padding: 10,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
});

export default FutureForecastItem;
