import {StyleSheet} from 'react-native';
import React from 'react';
import NavigationRoute from './navigation/NavigationRoute';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoute />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
