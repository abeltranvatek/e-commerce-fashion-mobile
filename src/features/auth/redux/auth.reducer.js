import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
} from './auth.actionTypes';

const initialState = {
  pending: false,
  user: null,
  error: null,
  token: '',
  tokenRegister: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
        token: action.payload.token,
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error,
      };
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        user: action.payload.user,
        tokenRegister: action.payload.tokenRegister,
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        pending: true,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
