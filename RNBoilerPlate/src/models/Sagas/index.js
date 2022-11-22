import {all, fork} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import UserSaga from './UserSaga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(UserSaga)]);
}
