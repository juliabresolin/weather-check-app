import openweatherAPI from '../services/openweatherAPI';
import env from '../config/app.env';
import getGeolocation from "./getGeolocation";
import { useEffect } from 'react';

interface positionProps {
  latitude: number;
  longitude: number;
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
          lang: 'br'
        }
      });

      // console.log(response.data);

    } catch (err) {
      // console.error(err);
    }
  };
}

export default getCurrentWeather;
