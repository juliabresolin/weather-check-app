import openweatherAPI from '../services/openweatherAPI';
import env from '../config/app.env';
import getGeolocation from "./getGeolocation";
import { useEffect } from 'react';

interface positionProps {
  latitude: number;
  longitude: number;
}

export interface weatherProps {
  locate: string;
  temperature: number;
  weatherDescription: string;
  icon: string;
  pressure: number;
  feels_like: number;
  humidity: number;
  visibility: number;
  sunrise: number;
  sunset: number;
}

function getCurrentWeather() {

  // busca a localização do usuário e retorna um objeto com as propriedades latitude e longitude
  const currentLocation = getGeolocation();

  // gancho que busca os dados climáticos do usuário se a localização do mesmo muda
  useEffect(() => {
    if (currentLocation) {
      currentWeather(currentLocation);
    }
  }, [currentLocation]);


  const currentWeather = async (currentLocation: positionProps) => {
    try {
      const response = await openweatherAPI.get('weather', {
        params: {
          lat: currentLocation.latitude,
          lon: currentLocation.longitude,
          appid: env.openweather_api,
          units: 'metric',
          lang: 'pt_br'
        }
      });

      const weather: weatherProps = {
        locate: response.data.name,
        temperature: response.data.main.temp,
        weatherDescription: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        pressure: response.data.main.pressure,
        feels_like: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        visibility: response.data.visibility,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset
      };

      return weather;

    } catch (err) {
      console.error(err);
      return null;
    }
  };
}

export default getCurrentWeather;
