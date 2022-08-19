import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherItem from './WeatherItem';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type DateTimeProps = {
  current: {
    temp?: number;
    humidity?: string;
    pressure?: string;
    sunset: string;
    sunrise: string;
  };
  timezone: string;
  lat: string | number;
  lon: string | number;
};

const DateTime: React.FC<DateTimeProps> = ({ current, timezone, lat, lon }) => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'pm' : 'am';

      setTime(
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ', ' + date + ' ' + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            unit="%"
            value={current ? current.humidity : ''}
          />
          <WeatherItem
            title="Pressure"
            unit="hPA"
            value={current ? current.pressure : ''}
          />
          <WeatherItem
            title="Sunrise"
            unit="am"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format('HH:mm')
                : ''
            }
          />
          <WeatherItem
            title="Sunset"
            unit="pm"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format('HH:mm')
                : ''
            }
          />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
        <Text style={styles.latlong}>
          {lat}N {lon}E
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 30,
  },
  heading: {
    fontSize: 45,
    color: 'white',
    fontWeight: '100',
  },
  subHeading: {
    fontSize: 25,
    color: '#eee',
    fontWeight: '100',
  },
  rightAlign: {
    textAlign: 'right',
    marginTop: 20,
  },
  timezone: {
    fontSize: 20,
    color: 'white',
  },
  latlong: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  weatherItemContainer: {
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default DateTime;
