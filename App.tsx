import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { DMSans_400Regular, DMSans_700Bold, useFonts } from '@expo-google-fonts/dm-sans';

import Home from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Home />
        <StatusBar style="dark" />
      </>
    );
  }
}
