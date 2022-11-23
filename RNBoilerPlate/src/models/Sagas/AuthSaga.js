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

    if (Boolean(data?.code === 1)) {
      action.callback(data);
      yield put({
        type: `${SIGN_IN}_${FAIL}`,
        payload: data,
      });
    } else {
      action.callback(data.data);
      yield put({
        type: `${SIGN_IN}_${SUCCESS}`,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log('something went wrong');
  }
}

function* signUp(action) {
  try {
    let {data} = yield call(
      postApiFlow,
      action.payload,
      'api/authaccount/registration',
    );

    if (data?.code === 1) {
      action.callback(data);
      yield put({
        type: `${SIGN_UP}_${FAIL}`,
        payload: data,
      });
    } else {
      action.callback(data.data);
      yield put({
        type: `${SIGN_UP}_${SUCCESS}`,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log('something went wrong');
  }
}

function* logout(action) {
  try {
    action.callback();
    yield put({
      type: `${LOGOUT}_${SUCCESS}`,
      payload: {
        Id: undefined,
        Name: undefined,
        Email: undefined,
        Token: undefined,
      },
    });
  } catch (err) {
    action.callback();
    console.log('LOGOUT:', err);
  }
}
export default function* root() {
  yield all([
    takeEvery(`${SIGN_IN}_${REQUEST}`, signIn),
    takeEvery(`${SIGN_UP}_${REQUEST}`, signUp),
    takeEvery(`${LOGOUT}_${REQUEST}`, logout),
  ]);
}
