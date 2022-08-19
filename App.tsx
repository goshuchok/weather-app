import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import WeatherComponent from './components/WeatherComponent';
import store from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WeatherComponent />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
