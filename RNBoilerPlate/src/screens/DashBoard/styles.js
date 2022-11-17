import {StyleSheet} from 'react-native';
import {BLACK_COLOR, Color, WHITE_COLOR} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.WHITE_COLOR,
  },
  textstyle: {
    color: Color.BLACK_COLOR,
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
  image: {
    width: 20,
    height: 20,
  },
});
