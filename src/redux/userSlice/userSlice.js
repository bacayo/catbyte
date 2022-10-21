import {createSlice} from '@reduxjs/toolkit';
import {
  deleteUserAsync,
  getAllUsersAsync,
  getSingleUserAsync,
  addNewUserAsync,
} from '../../api';

const initialState = {
  isLoading: false,
  users: [],
  user: [],
  error: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    clearUser: state => {
      state.user = [];
    },
  },
  extraReducers: builder => {
    //* get users
    builder.addCase(getAllUsersAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
      console.log(action.payload.users);
    });
    builder.addCase(getAllUsersAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //*get single user
    builder.addCase(getSingleUserAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSingleUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getSingleUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // //*delete user
    builder.addCase(deleteUserAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //* add new user
    builder.addCase(addNewUserAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addNewUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.unshift(action.payload);
    });
    builder.addCase(addNewUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const {clearUser} = userSlice.actions;
