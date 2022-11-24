import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ColorFunc} from '../utils/ColorConstants';

const CustomInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={
          ColorFunc().isDark ? ColorFunc().DIM_WHITE : ColorFunc().PLACE_HOLDER_COLOR
        }
        style={[props.customStyle, styles.inputStyle(ColorFunc().isDark)]}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
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
  inputStyle: isDark => ({
    marginStart: 10,
    color: isDark ? ColorFunc().WHITE : ColorFunc().BLACK,
    fontSize: 15,
    fontWeight: '500',
  }),
});
