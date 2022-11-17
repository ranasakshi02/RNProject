import {StyleSheet} from 'react-native';
import {BLACK_COLOR, Color, PRIMARY_COLOR} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.PRIMARY_COLOR,
  },
  textstyle: {
    color: Color.BLACK_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
