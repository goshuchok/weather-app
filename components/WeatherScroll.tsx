import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CurrentTempEl from './CurrentTempEl';
import FutureForecast from './FutureForecast';

type WeatherScrollProps = {
  weatherData: [];
};

const WeatherScroll: React.FC<WeatherScrollProps> = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempEl
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 30,
    backgroundColor: '#18181bcc',
    flex: 0.4,
  },
});

export default WeatherScroll;
