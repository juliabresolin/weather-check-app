import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import getCurrentWeather from '../../utils/getCurrentWeather';

import styles from './styles';

import iconImage from '../../assets/images/icons/weather-icons/01d.png';

interface weatherOptions {
  description: string;
  value: number;
}

interface weatherProps {
  locale: string;
  temperature: number;
  description: string;
  icon: string;
  options: weatherOptions[];
}

const Home: React.FC = () => {

  const [weather, setWeather] = useState<weatherProps>();

  const dateFormatOptions = new Intl.DateTimeFormat('pt-br', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const dateFormat = dateFormatOptions.format(new Date());



  useEffect(() => {
    getWeather();
    // console.log(weather);
  }, []);

  function getWeather() {
    navigator.geolocation.getCurrentPosition(
      async position => {
        // pega as coordenadas atuais do usuario
        const { latitude, longitude } = position.coords;

        // executa a função para buscar os dados climáticos passando as coordenadas como parâmetro
        const { data } = await getCurrentWeather({ latitude, longitude });

        // monta o objeto com as informações necessárias

        const currentWeather = {
          locale: data.name,
          temperature: parseInt(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          options: [
            { description: 'Pressão', value: data.main.pressure },
            { description: 'Visibilidade', value: data.visibility },
            { description: 'Umidade', value: data.main.humidity },
            { description: 'Sensação Térmica', value: data.main.feels_like },
            { description: 'Nascer do Sol', value: data.sys.sunrise },
            { description: 'Pôr do Sol', value: data.sys.sunset }
          ]
        };

        // seta os dados na variável weather
        setWeather(currentWeather);
      },
      error => {
        throw new Error("Error getting weather conditions!");
      })
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{weather?.locale}</Text>
          <Text style={styles.date}>{dateFormat}</Text>
        </View>

        <Feather name="refresh-ccw" size={24} color="#222222" />
      </View>

      <View style={styles.temperatureContainer}>
        <Image source={iconImage} resizeMode="contain" style={styles.weatherIcon} />
        <Text style={styles.temperature}>{`${weather?.temperature}º`}</Text>
        <Text style={styles.weatherDescription}>{weather?.description}</Text>
      </View>

      {/* <View style={styles.optionsContainer}>
        {weather?.options.map(option => (
          <View style={styles.optionContent}>
            <Text style={styles.optionDescription}>{option.description}</Text>
            <Text style={styles.optionValue}>{option.value}</Text>
          </View>
        ))}
      </View> */}
    </View>
  )
};

export default Home;
