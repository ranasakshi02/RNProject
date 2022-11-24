import {StyleSheet} from 'react-native';
import {ColorFunc} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: isDark => ({
    flex: 1,
    backgroundColor: isDark ? ColorFunc().GREY : ColorFunc().WHITE,
  }),
  subContainer: {marginTop: '10%'},
  textstyle: {
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
  image: isDark => ({
    tintColor: isDark ? ColorFunc().WHITE : ColorFunc().BLACK,
    width: 20,
    height: 20,
  }),
  toggleSwitchLabel: isDark => ({
    fontWeight: '900',
    color: isDark ? ColorFunc().WHITE : ColorFunc().BLACK,
  }),
});
