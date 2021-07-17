/*   lesson3 is a small exercise */

import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import AppButton from '../../04-styling/components/AppButton';
import colors from '../../04-styling/config/colors';

export default function Lesson3() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      resizeMode="cover"
      source={require('../assets/1.jpg')}>
      <View style={styles.logoWrapper}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.logoText}>Sell what We don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" styleButton={{marginBottom: 10}}></AppButton>
        <AppButton
          title="register"
          styleButton={{backgroundColor: colors.secondary}}></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    padding: 20,
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
