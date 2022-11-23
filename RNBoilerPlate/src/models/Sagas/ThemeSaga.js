import {put, all, takeEvery} from 'redux-saga/effects';
import {REQUEST, SUCCESS, TOGGLE_THEME} from '../Actions/Actions';

function* toggleTheme(action) {

  try {
    action.callback(action.isDark);
    yield put({
      type: `${TOGGLE_THEME}_${SUCCESS}`,
      payload: {isDark: action.isDark},
    });
  } catch (err) {
    action.callback(err);
  }
}
export default function* root() {
  yield all([takeEvery(`${TOGGLE_THEME}_${REQUEST}`, toggleTheme)]);
}
