import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SignIn from '../screens/Auth/SignIn/SignIn';
import DashBoardScreen from '../screens/DashBoard/DashBoardScreen';
import SignUp from '../screens/Auth/SignUp/SignUp';
import {ColorFunc} from '../utils/ColorConstants';
import {connect} from 'react-redux';
import {CombinedDarkTheme, CombinedDefaultTheme} from '../utils/ThemeConfig';
import SettingScreen from '../screens/Settings/SettingScreen';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const mapStateToProps = state => {
  return {state};
};
const AuthRoute = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};
const NavigationRoute = ({state}) => {
  const Stack = createStackNavigator();
  let {isDark} = state.ThemeReducer;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <NavigationContainer theme={combinedTheme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={ColorFunc().PRIMARY}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: ColorFunc().PRIMARY,
          },
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthRoute"
          component={AuthRoute}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashBoardScreen"
          component={DashBoardScreen}
          options={() => ({
            title: 'DashBoard',
          })}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={() => ({
            headerTitleAlign: 'center',
            title: 'Settings',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const connectComponent = connect(mapStateToProps);
export default connectComponent(NavigationRoute);
