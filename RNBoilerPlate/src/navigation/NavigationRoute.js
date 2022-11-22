import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SignIn from '../screens/Auth/SignIn/SignIn';
import DashBoardScreen from '../screens/DashBoard/DashBoardScreen';
import SignUp from '../screens/Auth/SignUp/SignUp';
import {Color, PRIMARY_COLOR} from '../utils/ColorConstants';
import {Text} from 'react-native';
import SettingScreen from '../screens/Settings/SettingScreen';
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

const NavigationRoute = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthRoute" component={AuthRoute} />
      <Stack.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: Color.PRIMARY_COLOR,
          },
          headerRight: () => {},
          title: 'DashBoard',
        })}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: Color.PRIMARY_COLOR,
          },
          headerTitleAlign: 'center',
          title: 'Settings',
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoute;
