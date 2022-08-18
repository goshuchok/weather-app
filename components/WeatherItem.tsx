import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WeatherItemProps = {
  title: string;
  value: string;
  unit: string;
};

const WeatherItem: React.FC<WeatherItemProps> = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherItemTitle: {
    color: '#eee',
    fontSize: 14,
    fontWeight: '100',
  },
});

export default WeatherItem;
