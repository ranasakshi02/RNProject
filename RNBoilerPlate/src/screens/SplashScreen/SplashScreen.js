import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import TextComponent from '../../components/TextComponent';

const mapStateToProps = state => {
  return {state};
};
const SplashScreen = ({navigation, state}) => {
  let {Token} = state?.AuthReducer;
  let {isDark} = state?.ThemeReducer;

  const [loaded, setloaded] = useState(false);

  setInterval(() => {
    setloaded(true);
  }, 2000);
  useEffect(() => {
    if (loaded) {
      if (Token) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'DashBoardScreen'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'AuthRoute'}],
          }),
        );
      }
    }
  }, [loaded]);

  return (
    <SafeAreaView style={styles.mainContainer(isDark)}>
      <TextComponent style={styles.textstyle}>Splash Screen</TextComponent>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps);
export default connectComponent(SplashScreen);
