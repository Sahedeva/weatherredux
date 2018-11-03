import axios from 'axios';

const API_KEY = '9a2ea97a341896c6d21a1829cab562ad';
const WEATHER_KEY = '88b21c3acf4cba4a373d6e6a757b4a7d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const REQUEST = axios.get(URL);

  console.log('Request: ',REQUEST);
  
  return {
    type: FETCH_WEATHER,
    payload: REQUEST
  }
}
