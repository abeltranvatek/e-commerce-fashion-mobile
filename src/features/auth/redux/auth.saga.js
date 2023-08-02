import {call, put, takeLatest} from 'redux-saga/effects';
import {loginAPI} from '../apis/loginAPI';

import {fetchLoginFailure, fetchLoginSuccess} from './auth.actions';
import {FETCH_LOGIN_REQUEST} from './auth.actionTypes';

const loginRequest = userRequest => loginAPI(userRequest);

function* fetchLoginSaga(action) {
  try {
    console.log('Action Payload', action.payload);
    const response = yield call(loginRequest, action.payload);
    yield put(
      fetchLoginSuccess({
        user: response.user,
      }),
    );
  } catch (e) {
    yield put(
      fetchLoginFailure({
        error: 'unkonw error',
      }),
    );
  }
}

function* authorizeSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga);
}

export default authorizeSaga;
