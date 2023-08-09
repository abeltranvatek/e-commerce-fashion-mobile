import {FETCH_NAV_ONE, FETCH_NAV_TWO} from './actionType';

export const fetchNavOne = payload => ({
  type: FETCH_NAV_ONE,
  payload,
});
export const fetchNavTow = payload => ({
    type: FETCH_NAV_TWO,
    payload,
  });
