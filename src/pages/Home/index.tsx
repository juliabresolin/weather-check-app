import React from 'react';
import { View, Text } from 'react-native';

import getCurrentWeather from '../../utils/getCurrentWeather';

import styles from './styles';

function Home() {

  getCurrentWeather();

  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
    </View>
  )
};

export default Home;
