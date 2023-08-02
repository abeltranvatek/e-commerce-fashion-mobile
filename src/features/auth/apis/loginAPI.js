import {CMApi} from '~core/api/instance';

export const loginAPI = loginInfo => {
  return CMApi.post('/authorize/login', loginInfo);
};
