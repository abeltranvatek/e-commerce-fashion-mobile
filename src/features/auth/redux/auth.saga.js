import {call, put, takeLatest} from 'redux-saga/effects';
import {loginAPI} from '../apis/loginAPI';
import {
  fetchLoginFailure,
  fetchLoginSuccess,
  fetchRegisterFailure,
  fetchRegisterSuccess,
} from './auth.actions';
import {FETCH_LOGIN_REQUEST, FETCH_REGISTER_REQUEST} from './auth.actionTypes';
import {validatePathConfig} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegisterAPI} from '../apis/registerAPI';

const loginRequest = userRequest => loginAPI(userRequest);
const RegisterRequest = userRequest => RegisterAPI(userRequest);
function* fetchLoginSaga(action) {
  try {
    const response = yield loginAPI(action.payload);
    yield AsyncStorage.setItem('accessToken', response.token);
    yield put(
      fetchLoginSuccess({
        user: response.user,
        token: response.token,
      }),
    );
  } catch (e) {
    yield put(
      fetchLoginFailure({
        error: e.message,
      }),
    );
  }
}
function* fetchRegisterSaga(action) {
  try {
    const response = yield call(RegisterAPI, action.payload);
    console.log(response);
    yield put(
      fetchRegisterSuccess({
        tokenRegister: response.token,
      }),
    );
  } catch (e) {
    yield put(
      fetchRegisterFailure({
        error: 'knakss',
      }),
    );
  }
}

function* authorizeSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga);
  yield takeLatest(FETCH_REGISTER_REQUEST, fetchRegisterSaga);
}

export default authorizeSaga;
