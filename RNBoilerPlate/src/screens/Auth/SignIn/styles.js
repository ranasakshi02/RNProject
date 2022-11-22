import {StyleSheet} from 'react-native';
import {BLACK_COLOR, Color, WHITE_COLOR} from '../../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.WHITE_COLOR,
  },
  container: {
    marginHorizontal: 16,
  },
  textstyle: {
    color: Color.BLACK_COLOR,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  signInTextStyle: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
