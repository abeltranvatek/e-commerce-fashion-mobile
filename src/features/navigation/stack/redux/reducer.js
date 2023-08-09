import {FETCH_NAV_ONE, FETCH_NAV_TWO} from './actionType';

const initialState = {
  count: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAV_ONE:
      return {
        ...state,
        count: 1,
      };
    case FETCH_NAV_TWO:
      return {
        ...state,
        count: 1,
      };
    default:
      return {
        ...state,
      };
  }
};
