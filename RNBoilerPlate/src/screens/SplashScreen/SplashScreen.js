import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Color, PRIMARY_COLOR} from '../../utils/ColorConstants';
import {connect} from 'react-redux';
const mapStateToProps = state => {
  console.log('--', state);
  return {state};
};
const SplashScreen = ({navigation, state}) => {
  let {Token} = state?.AuthReducer;
  console.log('token', Token);
  const [loaded, setloaded] = useState(false);

  setInterval(() => {
    setloaded(true);
  }, 2000);
  useEffect(() => {
    if (loaded) {
      if (Token) {
        navigation.replace('DashBoardScreen');
      } else {
        navigation.replace('AuthRoute', {screen: 'SignIn'});
      }
    }
  }, [loaded]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={Color.PRIMARY_COLOR} barStyle="dark-content" />
      <Text style={styles.textstyle}>Splash Screen</Text>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps);
export default connectComponent(SplashScreen);
