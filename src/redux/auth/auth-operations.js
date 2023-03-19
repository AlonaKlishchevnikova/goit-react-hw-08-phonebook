import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
    "auth/signup",
    async(credentials, thunkAPI) => {
        try {
            const { data:result } = await axios.post('/users/signup', credentials);
             setToken(result.token);
            return result;
        }
        catch({error}) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data: result } = await axios.post('/users/login', credentials);
            setToken(result.token);
            return result;
        }
        catch ({ error }) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (state.auth.token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(state.auth.token);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);