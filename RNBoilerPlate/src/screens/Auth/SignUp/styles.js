import {StyleSheet} from 'react-native';
import { BLACK, WHITE } from '../../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  container: {
    marginHorizontal: 16,
  },
  textstyle: {
    color:BLACK,
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
