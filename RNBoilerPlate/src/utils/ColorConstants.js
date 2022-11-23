import {store} from '../store';
export function ColorFunc() {
  let store1 = store.getState();
  let {isDark} = store1.ThemeReducer;
  return {
    WHITE_COLOR: '#fff',
    PRIMARY_COLOR: isDark ? '#075e2a' : '#12ec69',
    BLACK_COLOR: '#000',
    GREY_COLOR: '#303030',
    isDark,
  };
}
const unSubscribe = store.subscribe(ColorFunc);
unSubscribe();
