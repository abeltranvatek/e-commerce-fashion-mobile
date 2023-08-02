import environment from 'react-native-config';
import {Environment} from '~constants';

export const getShotEnv = isLowercase => {
  switch (env.ENV) {
    case Environment.dev:
      return isLowercase ? 'dev' : 'DEV';
    case Environment.prod:
      return isLowercase ? 'prod' : 'PROD';
    default:
      return '';
  }
};

export const env = {
  BASE_URL: environment.BASE_URL,
  HTTP_TIMEOUT: environment.HTTP_TIMEOUT,
  IDLE_TIMEOUT: environment.HTTP_TIMEOUT,
  OTP_EXPIRE_SECOND: environment.OTP_EXPIRE_SECOND,
};
