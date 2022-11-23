import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from './TextComponent';
import {ColorFunc} from '../utils/ColorConstants';

const CustomButton = props => {
  return (
    <View style={{
      opacity: props.opacity ? props.opacity : 1
    }}>
      <TouchableOpacity
        style={[
          props.containerStyle,
          styles.btnContainer,
        ]}
        onPress={props.onPress}
        activeOpacity={0.8}
        disabled={props.disabled}>
        <TextComponent style={[props.textStyle, styles.btnText]}>
          {props.label}
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    backgroundColor: ColorFunc().PRIMARY,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
