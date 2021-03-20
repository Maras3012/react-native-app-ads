import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  AdMobBanner
} from 'expo-ads-admob';

export default function App() {

  // bannerError(e){
  //   alert(e);
  // }

  return ( 
    <View style={styles.container}>
      <Text>ADS EXAMPLE{"\n"}</Text>
      <AdMobBanner 
        bannerSize="BANNER"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        // testDeviceID="EMULATOR"
        // onDidFailToReceiveAdWithError={ (e) => this.bannerError(e) }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
