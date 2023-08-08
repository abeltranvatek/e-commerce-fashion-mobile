import {CMApi} from '~core/api/instance';

export const loginAPI = loginInfo => {
  return CMApi.post('api/v1/customer/login', loginInfo);
};
