import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import { PRIMARY_COLOR } from '../../utils/ColorConstants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthRoute', {screen: 'SignIn'});
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      <Text style={styles.textstyle}>Splash Screen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
