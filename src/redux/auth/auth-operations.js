import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestSingup,
  requestLogin,
  requestCurrentUser,
  requestLogout,
} from 'api/auth-api';

export const signupUser = createAsyncThunk(
  'auth/singup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestSingup(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestLogin(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await requestCurrentUser(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

// V1
// export const currentUser = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const persistedToken = getState().auth.token;
//       const data = await requestCurrentUser(persistedToken);
//       return data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data.message);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const persistedToken = getState().auth.token;
//       if (!persistedToken) {
//         return false;
//       }
//     },
//   }
// );

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await requestLogout(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
