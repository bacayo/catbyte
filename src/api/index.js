import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URLSearchParams} from 'react-native-url-polyfill';

const BASE_URL = 'https://dummyjson.com/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

//*get all users
export const getAllUsersAsync = createAsyncThunk(
  'userSlice/getAllUsersAsync',
  async data => {
    const params = new URLSearchParams();
    params.append('limit', data.limit);
    console.log(params);
    const response = await axios.get('users', {params});
    return response.data;
  },
);

//* get single user
export const getSingleUserAsync = createAsyncThunk(
  'userSlice/getSingleUserAsync',
  async id => {
    const response = await axios.get(`users/${id}`);
    return response.data;
  },
);

//* delete user

export const deleteUserAsync = createAsyncThunk(
  'userSlice/deleteUserAsync',
  async (id, thunkAPI) => {
    const response = await axios.delete(`users/${id}`);
    return response.data;
  },
);

//* add new user
export const addNewUserAsync = createAsyncThunk(
  'addNewUserAsync',
  async data => {
    const params = new URLSearchParams();
    params.append('firstName', data.firstName);
    params.append('lastName', data.lastName);
    const response = await axios.post('users/add', data);
    return response.data;
  },
);
