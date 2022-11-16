import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { BLACK_COLOR } from '../utils/ColorConstants';

const CustomInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        style={[props.customStyle, styles.inputStyle]}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
  },
  inputStyle: {
    marginStart: 10,
    color: BLACK_COLOR,
    fontSize: 15,
    fontWeight: '500',
  },
});
