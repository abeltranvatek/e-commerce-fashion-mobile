import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
} from './auth.actionTypes';

const initialState = {
  pending: false,
  user: null,
  error: null,
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
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
