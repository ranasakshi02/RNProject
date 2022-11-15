import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoute from './navigation/NavigationRoute';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
