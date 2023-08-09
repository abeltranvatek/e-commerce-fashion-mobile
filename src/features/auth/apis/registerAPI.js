import {CMApi} from '~core/api/instance';

export const RegisterAPI = RegisterInfo => {
  return CMApi.post('api/v1/customer/register', RegisterInfo);
};
