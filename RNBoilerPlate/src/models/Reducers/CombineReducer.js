import {combineReducers} from 'redux';
import AuthReducer, {initalState as authInitialState} from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT, SUCCESS} from '../Actions/Actions';
export const GlobalInitialState = {
  AuthReducer: authInitialState,
};

const appReducer = combineReducers({AuthReducer});
const rootReducer = (state, action) => {
  if (action.type === `${LOGOUT}_${SUCCESS}`) {
    const prevState = state;
    state = GlobalInitialState;
    const {payload} = action || {};
    const {isLogout = true} = payload || {};
    if (isLogout) {
      AsyncStorage.removeItem('persist:root');
      return appReducer(undefined, action);
    } else {
      return appReducer(state, action);
    }
  } else {
    return appReducer(state, action);
  }
};
export {rootReducer};
