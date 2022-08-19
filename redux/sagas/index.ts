import { put, take, takeEvery } from 'redux-saga/effects';

const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

async function fetchDataFromApi(
  latitude: string | number,
  longitude: string | number
) {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
  );
  const data = await request.json();
  return data;
}

export function* workerSaga() {
  const data = yield fetchDataFromApi('40.7128', '-74.0060');

  yield put({ type: 'SET_WEATHER', payload: data });
}

export function* watchClickSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
