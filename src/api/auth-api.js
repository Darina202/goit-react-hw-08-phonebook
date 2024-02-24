import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const requestSingup = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  return data;
};

export const requestLogin = async body => {
  const { data } = await authInstance.post('/users/login', body);
  return data;
};

export const requestCurrentUser = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    authInstance.defaults.headers.authorization = '';
    throw error;
  }
};

export const requestLogout = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const { data } = await authInstance.post('/users/logout');
    return data;
  } catch (error) {
    authInstance.defaults.headers.authorization = '';
    throw error;
  }
};

export default authInstance;
