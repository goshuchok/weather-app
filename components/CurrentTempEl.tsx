import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment-timezone';

type CurrentTempElProps = {
  data?: {
    weather: {};
    dt: number;
    temp: {
      night: string;
      day: string;
    };
  };
};

const CurrentTempEl: React.FC<CurrentTempElProps> = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png',
    };

    return (
      <View style={styles.currentTemplateContainer}>
        <Image source={img} style={styles.image} />
        <View style={styles.otherContainer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format('dddd')}
          </Text>
          <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
          <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  currentTemplateContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
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
  otherContainer: {
    paddingRight: 40,
  },
});

export default CurrentTempEl;
