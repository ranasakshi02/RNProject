import {all, fork} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import UserSaga from './UserSaga';
import ThemeSaga from './ThemeSaga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(UserSaga), fork(ThemeSaga)]);
}
