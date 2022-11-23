import {StyleSheet} from 'react-native';
import {
  BLACK_COLOR,
  Color,
  ColorFunc,
  PRIMARY_COLOR,
} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorFunc().PRIMARY_COLOR,
  },
  textstyle: {
    color: ColorFunc().BLACK_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
