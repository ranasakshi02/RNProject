import {StyleSheet} from 'react-native';
import {BLACK_COLOR, PRIMARY_COLOR} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  textstyle: {
    color: BLACK_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
