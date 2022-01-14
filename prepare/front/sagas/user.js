// sagas/user.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../reducers/user';

function loginAPI(data) {
  return axios.get('http://localhost:3000/user/user.json', data);
}

function* login(action) {
  try {
    // api 통신할때는 call
    // const result = yield call(loginAPI, action.data);
    // console.log(result);
    yield delay(1000);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      data: err.response.data,
    });
  }
}

function logoutAPI(data) {
  return axios.post('http://localhost:3000/user/user.json', data);
}

function* logout(action) {
  try {
    // api 통신할때는 call
    // const result = yield call(logoutAPI, action.data);
    // console.log(result);
    yield delay(1000);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({
      type: LOGOUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      data: err.response.data,
    });
  }
}

function signupAPI() {
  return axios.post('/api/signup');
}

function* signup(action) {
  try {
    // const result = yield call(signupAPI);
    yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}
function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignUp)]);
}