import {takeEvery, put, call, all, takeLatest, fork} from 'redux-saga/effects';
import axios from 'axios';
import {BASE_URL} from '../../utils/Constants';
import {
  FAIL,
  GET_USER_DETAILS,
  GET_USER_LIST,
  REQUEST,
  SUCCESS,
} from '../Actions/Actions';

function getApiFlow(URL, token) {
  return axios.request({
    method: 'get',
    url: BASE_URL + URL,
    ...(Boolean(token) && {headers: {Authorization: `Bearer ${token}`}}),
    timeout: 10000,
  });
}
function* getUserList(action) {
  try {
    let {data} = yield call(
      getApiFlow,
      `api/users?page=${action.page ? action.page : 1}`,
      action.Token,
    );
    if (data?.code === 1) {
      action.callback(data);
      yield put({
        type: `${GET_USER_LIST}_${FAIL}`,
        payload: data,
      });
    } else {
      action.callback(data);
      yield put({
        type: `${GET_USER_LIST}_${SUCCESS}`,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
function* getUserDetails(action) {
  console.log(action);

  try {
    let {data} = yield call(
      getApiFlow,
      `/api/users/${action.uid}`,
      action.Token,
    );
    if (data?.code === 1) {
      action.callback(data);
      yield put({
        type: `${GET_USER_DETAILS}_${FAIL}`,
        payload: data,
      });
    } else {
      action.callback(data);
      yield put({
        type: `${GET_USER_DETAILS}_${SUCCESS}`,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export default function* root() {
  yield all([
    takeEvery(`${GET_USER_LIST}_${REQUEST}`, getUserList),
    takeEvery(`${GET_USER_DETAILS}_${REQUEST}`, getUserDetails),
  ]);
}
