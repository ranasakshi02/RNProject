import {StyleSheet} from 'react-native';
import { ColorFunc } from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  headerStyle: {
    justifyContent: 'center',
    marginEnd: 10,
    alignItems: 'center',
  },
  image: isDark => ({
    tintColor: isDark ? ColorFunc().WHITE : ColorFunc().BLACK,
    width: 20,
    height: 20,
  }),
});
