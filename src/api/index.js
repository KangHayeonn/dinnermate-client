import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

const createInstance = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  return setInterceptors(instance);
};

export const instance = createInstance();
export const instanceWithToken = createInstanceWithAuth();
