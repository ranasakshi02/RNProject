import {all, fork} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
