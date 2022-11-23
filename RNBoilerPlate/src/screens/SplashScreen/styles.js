import {StyleSheet} from 'react-native';
import {BLACK, Color, ColorFunc, PRIMARY} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: isDark => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorFunc().PRIMARY,
  }),
  textstyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
