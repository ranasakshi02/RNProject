import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthRoute', {screen: 'SignIn'});
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#12ec69'} barStyle="dark-content" />
      <Text style={styles.textstyle}>Splash Screen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
