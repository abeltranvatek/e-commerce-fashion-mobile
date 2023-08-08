import axios from 'axios';
import VersionInfo from 'react-native-version-info';
import {env} from './env';
import {name} from '../../../package.json';
import AxiosCurlirize from 'axios-curlirize';

/** endpoints to request without Bearer */
const excludeAuthEndpoints = ['/login'];

const CMApi = axios.create({
  baseURL: 'http://14.225.255.245:8090/',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': `${name}/${VersionInfo.appVersion}`,
  },
});
AxiosCurlirize(CMApi);
CMApi.interceptors.request.use(
  async request => {
    if (excludeAuthEndpoints.includes(request.url ?? '/')) {
      return request;
    }

    //Get From Store Reduz
    let accessToken = '';
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

CMApi.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    const {response} = error || {};
    const {data} = response || {};

    // TODO: remove this when infrastructure is stable
    if (response?.status === 403 && data?.includes('Cloudflare')) {
      console.log('API Error', response?.status);
    }

    if (data?.error?.code) {
      const isBearer = error.config.headers?.Authorization?.includes('Bearer');
      if (data.error.code === '401' && isBearer) {
        console.log('API Error', response?.status);
      }
    }

    return Promise.reject(data || response);
  },
);

const RESTUploadToS3 = async (s3Uri, imageUri) => {
  return fetch(s3Uri, {
    method: 'PUT',
    body: await (await fetch(imageUri)).blob(),
  });
};

export {CMApi, RESTUploadToS3};
