import React from 'react';
import keys from '../../config/app.env';

import styles from './styles';
import { View, Text } from 'react-native';

function Home() {

  function getLocation() {
    const test = keys.openweather_api;
    console.log(test)
  }

  getLocation();

  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
    </View>
  )
};

export default Home;
