import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomImageComponent = props => {
  return (
    <View style={styles.imgView}>
      <Image source={{uri: props?.source}} style={styles.img} />
    </View>
  );
};

export default CustomImageComponent;

const styles = StyleSheet.create({
  imgView: {
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  img: {
    height: 100,
    width: 100,
  },
});
