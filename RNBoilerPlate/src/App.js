import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoute from './navigation/NavigationRoute';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationRoute />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
