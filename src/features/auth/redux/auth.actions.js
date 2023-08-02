import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from './auth.actionTypes';

export const fetchLoginRequest = payload => ({
  type: FETCH_LOGIN_REQUEST,
  payload,
});

export const fetchLoginSuccess = payload => ({
  type: FETCH_LOGIN_SUCCESS,
  payload,
});

export const fetchLoginFailure = payload => ({
  type: FETCH_LOGIN_FAILURE,
  payload,
});
