import {call, put, takeLatest} from 'redux-saga/effects';
import {loginAPI} from '../apis/loginAPI';
import {fetchLoginFailure, fetchLoginSuccess} from './auth.actions';
import {FETCH_LOGIN_REQUEST} from './auth.actionTypes';
import {validatePathConfig} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginRequest = userRequest => loginAPI(userRequest);
function* fetchLoginSaga(action) {
  try {
    yield (token = AsyncStorage.removeItem('accessToken'));
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

function* authorizeSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga);
}

export default authorizeSaga;
