import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContacts,
  requestDeleteContacts,
  requestFetchContacts,
} from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const data = await requestAddContacts(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizeName = name.toLowerCase();
      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        return normalizedCurrentName === normalizeName;
      });
      if (dublicate) {
        alert(`Contact ${name} already in list`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await requestDeleteContacts(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
