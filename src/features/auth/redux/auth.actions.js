import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
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
export const fetchRegisterRequest = payload => ({
  type: FETCH_REGISTER_REQUEST,
  payload,
});
export const fetchRegisterSuccess = payload => ({
  type: FETCH_REGISTER_SUCCESS,
  payload,
});
export const fetchRegisterFailure = payload => ({
  type: FETCH_REGISTER_FAILURE,
  payload,
});
