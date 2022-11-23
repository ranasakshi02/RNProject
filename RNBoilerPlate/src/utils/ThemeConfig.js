import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {ColorFunc} from './ColorConstants';

export const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
};

export const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: ColorFunc().GREY,
    text: ColorFunc().WHITE,
  },
};
