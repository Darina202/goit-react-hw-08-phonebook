import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const requestSingup = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  // authInstance.defaults.headers.authorization = `Bearer ${data.token}`;
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await authInstance.post('/users/login', body);
  // authInstance.defaults.headers.authorization = `Bearer ${data.token}`;
  setToken(data.token);
  return data;
};

export const requestCurrentUser = async token => {
  setToken(token);
  // authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    // authInstance.defaults.headers.authorization = '';
    setToken();
    throw error;
  }
};

export const requestLogout = async token => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
};

export default authInstance;
