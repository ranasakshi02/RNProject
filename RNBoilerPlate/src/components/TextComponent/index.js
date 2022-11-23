import {Text} from 'react-native';
import React from 'react';
import {ColorFunc} from '../../utils/ColorConstants';
import {styles} from './styles';

const TextComponent = ({children, style, modify}) => {
  return modify ? (
    <Text style={[style]}>{children}</Text>
  ) : (
    <>
      <Text style={[style, styles.textStyle(ColorFunc().isDark)]}>
        {children}
      </Text>
    </>
  );
};

export default TextComponent;
