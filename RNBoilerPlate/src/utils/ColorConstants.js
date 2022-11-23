import {store} from '../store';
export function ColorFunc() {
  let store1 = store.getState();
  let isDark = store1?.ThemeReducer?.isDark;
  return {
    WHITE: '#fff',
    PRIMARY: isDark ? '#0094ca' : '#31c8ff',
    BLACK: '#000',
    LBC: '#2f4f4f',
    GREY: '#303030',
    LIGHT_GREY: '#c4c4c4',
    DIM_WHITE: '#FAFAFA',
    isDark,
  };
}
const unSubscribe = store.subscribe(ColorFunc);
unSubscribe();
