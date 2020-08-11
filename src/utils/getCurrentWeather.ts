import openweatherAPI from "../services/openweatherAPI";
import env from '../config/app.env';

interface locationProps {
  latitude: number;
  longitude: number;
}

function getCurrentWeather({ latitude, longitude }: locationProps) {
  return openweatherAPI.get('weather', {
    params: {
      lat: latitude,
      lon: longitude,
      appid: env.openweather_api,
      units: 'metric',
      lang: 'pt_br'
    }
  });

}

export default getCurrentWeather;
