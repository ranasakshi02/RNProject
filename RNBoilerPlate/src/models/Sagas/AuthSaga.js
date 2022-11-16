import {takeEvery, put, call, all, takeLatest, fork} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP,
  SIGN_IN,
  SUCCESS,
  REQUEST,
  FAIL,
  LOGOUT,
} from '../Actions/Actions';
import {BASE_URL} from '../../utils/Constants';

function postApiFlow(authParams, URL, token) {
  return axios.request({
    method: 'post',
    url: BASE_URL + URL,
    ...(Boolean(authParams) && {data: authParams}),
    ...(Boolean(token) && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });
}

function* signIn(action) {
  try {
    let {data} = yield call(
      postApiFlow,
      action.payload,
      'api/authaccount/login',
    );
    if (Boolean(data?.error)) {
      yield put({
        type: `${SIGN_IN}_${FAIL}`,
        payload: data.data,
      });
    } else {
      action.callback(data.data);
      yield put({
        type: `${SIGN_IN}_${SUCCESS}`,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(
      err?.response?.data?.message
        ? err?.response?.data?.message
        : 'something went wrong',
    );
    action.callback({err: true});
  }
}

function* logout(action) {
  console.log('action', action);
  try {
    action.callback();
    yield put({
      type: `${LOGOUT}_${SUCCESS}`,
      payload: {isLogout: true},
    });
  } catch (err) {
    action.callback({err: true});
    console.log('LOGOUT:', err);
  }
}
export default function* root() {
  yield all([
    takeEvery(`${SIGN_IN}_${REQUEST}`, signIn),
    takeEvery(`${LOGOUT}_${REQUEST}`, logout),
  ]);
}
