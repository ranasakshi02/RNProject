import {StyleSheet} from 'react-native';
import {Color} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.WHITE_COLOR,
  },
  subContainer: {marginTop: '10%', alignItems: 'center'},
  textstyle: {
    color: Color.BLACK_COLOR,
    fontSize: 16,
    fontWeight: '500',
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
