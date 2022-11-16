import {StyleSheet} from 'react-native';
import { BLACK_COLOR, WHITE_COLOR } from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR,
  },
  textstyle: {
    color: BLACK_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
