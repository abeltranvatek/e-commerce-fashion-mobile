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
function* fetchLoginSaga(action) {
  try {
    const response = yield loginAPI(action.payload);
    yield AsyncStorage.setItem('accessToken', response.token);
    console.log(response);
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
    yield (response = yield RegisterAPI(action.payload));
    yield put(fetchRegisterSuccess)
  } catch (e) {
    yield put(
      fetchRegisterFailure({
        error: e.message,
      }),
    );
  }
}

function* authorizeSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga);
  yield takeLatest(FETCH_REGISTER_REQUEST, fetchRegisterSaga);
}

export default authorizeSaga;
