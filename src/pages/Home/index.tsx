import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { RectButton } from 'react-native-gesture-handler';

import getCurrentWeather from '../../utils/getCurrentWeather';

import convertUnixToHours from '../../utils/convertUnixToHours';
import convertMetersToQuilometers from '../../utils/convertMetersToQuilometers';


import styles from './styles';


interface weatherOptions {
  description: string;
  value: number;
  metric: string;
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
  }, []);

  // function that fetches climatic data based on the coordinates
  function getWeather() {
    navigator.geolocation.getCurrentPosition(
      async position => {

        // takes the current coordinates of the user
        const { latitude, longitude } = position.coords;

        // makes the request to the API passing the coordinates and expects and object as return
        // does the de-structuring and directly takes the date value of the return
        const { data } = await getCurrentWeather({ latitude, longitude });

        // builds the weather object with the information previously defined in the interface WeatherProps
        const currentWeather = {
          locale: data.name,
          temperature: parseInt(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          options: [
            { description: 'Sensação Térmica', value: parseInt(data.main.feels_like), metric: 'ºC' },
            { description: 'Nascer do Sol', value: convertUnixToHours({ unixTime: data.sys.sunrise, unixTimezone: data.timezone }), metric: '' },
            { description: 'Pôr do Sol', value: convertUnixToHours({ unixTime: data.sys.sunset, unixTimezone: data.timezone }), metric: '' },
            { description: 'Umidade', value: data.main.humidity, metric: '%' },
            { description: 'Visibilidade', value: convertMetersToQuilometers(data.visibility), metric: 'km' },
            { description: 'Pressão', value: data.main.pressure, metric: 'hPa' },
          ]
        };

        // set the data in the state weather
        setWeather(currentWeather);
      },
      error => {
        throw new Error("Error getting weather conditions!");
      })
  }

  // specific function for cliking refresh button
  function handleRefresh() {
    getWeather();
  }

  if (!weather) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{weather?.locale}</Text>
            <Text style={styles.date}>{dateFormat}</Text>
          </View>

          <RectButton onPress={handleRefresh}>
            <Feather name="refresh-ccw" size={24} color="#222222" />
          </RectButton>
        </View>

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{`${weather?.temperature}º`}</Text>
          <Text style={styles.weatherDescription}>{weather?.description}</Text>
        </View>

        <View>
          {weather?.options.map(option => (
            <View key={option.description} style={styles.optionContent}>
              <Text style={styles.optionDescription}>{option.description}</Text>
              <Text style={styles.optionValue}>{option.value + option.metric} </Text>
            </View>
          ))}
        </View>
      </View>
    )
  }

};

export default Home;
