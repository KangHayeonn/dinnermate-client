import { getAccessToken } from '@/utils/tokenControl';

export const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      // 토큰을 헤더에 추가
      const token = getAccessToken();

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response) => {
      // TODO : reissue login & common error message
    },
    (error) => {
      const { status } = error.response;
      if (status === 500) return Promise.reject(error);
    },
  );

  return instance;
};
