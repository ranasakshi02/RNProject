import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SignIn from '../screens/Auth/SignIn/SignIn';
import DashBoardScreen from '../screens/DashBoard/DashBoardScreen';
import SignUp from '../screens/Auth/SignUp/SignUp';
import {PRIMARY_COLOR} from '../utils/ColorConstants';
const AuthRoute = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
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
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: PRIMARY_COLOR,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoute;
