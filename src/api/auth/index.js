import { instance } from '@/api/index';
const prefix = '/v1';

const Auth = {
  async signup(param) {
    try {
      const url = `${prefix}/user/signup`;
      // const result = await instance.post(url, param);
      const result = {
        success: true,
        code: 20000,
        data: {
          userId: 1,
        },
      };
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default Auth;
