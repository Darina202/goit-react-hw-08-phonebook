// import axios from 'axios';
import instance from './auth-api';

// const contactInstance = axios.create({
//   baseURL: 'https://65d38a55522627d501091c9b.mockapi.io/api/contacts',
// });

export const requestFetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
