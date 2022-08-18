import React from 'react';
import { Text, View } from 'react-native';
import FutureForecastItem from './FutureForecastItem';

type FutureForecastProps = {
  data: any;
};

const FutureForecast: React.FC<FutureForecastProps> = ({ data }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {data && data.length > 0 ? (
        data.map(
          (data: any, idx: any) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
};

export default FutureForecast;
