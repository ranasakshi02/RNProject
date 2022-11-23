import {combineReducers} from 'redux';
import AuthReducer, {initialState as authInitialState} from './AuthReducer';
import UserReducer, {initialState as userInitialState} from './UserReducer';
import ThemeReducer from './ThemeReducer';
import {LOGOUT, SUCCESS} from '../Actions/Actions';
export const GlobalInitialState = {
  AuthReducer: authInitialState,
  UserReducer: userInitialState,
};

const appReducer = combineReducers({AuthReducer, UserReducer, ThemeReducer});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export {rootReducer};
