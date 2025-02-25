import Axios from 'axios';
import constants from '../constants/Links';

const Interceptor = Axios.create({
  baseURL: constants.baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
Interceptor.interceptors.request.use(
  async config => {
    // const {token} = store.getState().User;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    // config.headers["Accept-Language"] = lang;
    return config;
  },
  error => {
    console.log('🚀 ~ Request error', error);
    return Promise.reject(error);
  },
);
Interceptor.interceptors.response.use(
  response => response,
  async error => {
    // console.log('Interceptor error', JSON.stringify(error));
    console.log('Response error', JSON.stringify(error));

    const {message, response} = error;

    const _status = response?.status;

    // if (!_status) {
    //   return Promise.reject({
    //     response: {
    //       data: {
    //         message: message.includes('timeout')
    //           ? message
    //           : message.includes('cancel')
    //             ? 'canceled'
    //             : message,
    //       },
    //     },
    //   });
    // }
    // if (_status === 403) {
    //   store.dispatch(deleteUser());
    // }
    return Promise.reject(error);
  },
);

export default Interceptor;
