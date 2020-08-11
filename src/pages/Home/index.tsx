import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import getCurrentWeather, { weatherProps } from '../../utils/getCurrentWeather';

import styles from './styles';

function Home() {

  const [weather, setWeather] = useState<weatherProps>();

  async function loadWeather() {
    AsyncStorage.getItem('weather').then(async response => {
      if (!response) {
        const currentWeather = getCurrentWeather();
        await AsyncStorage.setItem('weather', JSON.stringify(currentWeather));
      }

    });
    const storageWeather = await AsyncStorage.getItem('weather');
    if (storageWeather) {
      setWeather(JSON.parse(storageWeather));
    }
  }

  useEffect(() => {
    loadWeather();
  }, []);

  getCurrentWeather();

  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
    </View>
  )
};

export default Home;
