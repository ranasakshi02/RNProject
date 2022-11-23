import {StyleSheet} from 'react-native';
import {ColorFunc} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  textStyle: isDark => ({
    color: isDark ? ColorFunc().WHITE : ColorFunc().BLACK,
  }),
});
