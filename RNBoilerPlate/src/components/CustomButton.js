import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { BLACK_COLOR, PRIMARY_COLOR } from '../utils/ColorConstants';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={[props.containerStyle, styles.btnContainer]}
      onPress={props.onPress}
      activeOpacity={props.activeOpacity}>
      <Text style={[props.textStyle, styles.btnText]}>{props.lable}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: BLACK_COLOR,
  },
});
