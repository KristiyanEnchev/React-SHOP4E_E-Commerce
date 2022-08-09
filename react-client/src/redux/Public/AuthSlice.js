import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userService from '../../Services/UserService.js';
import toast from 'react-hot-toast';
import { getError } from '../../utils.js';

const token = sessionStorage.getItem('token')
  ? sessionStorage.getItem('token')
  : null;

const isAdmin = sessionStorage.getItem('isAdmin') === 'true' ? true : false;

const initialState = {
  loading: false,
  error: null,
  _id: sessionStorage.getItem('_id'),
  avatar: sessionStorage.getItem('avatar'),
  name: sessionStorage.getItem('name'),
  email: sessionStorage.getItem('email'),
  isAdmin: isAdmin,
  token,
};

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const res = await userService.login(email, password);
      return res;
    } catch (err) {
      toast.error(getError(err));
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { _id, name, isAdmin, email, token } = action.payload;
      state._id = _id;
      state.email = email;
      state.token = token;
      state.name = name;
      state.isAdmin = isAdmin;
    },
    logOut: (state, action) => {
      state._id = null;
      state.email = null;
      state.token = null;
      state.name = null;
      state.isAdmin = false;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state._id = payload._id;
      state.email = payload.email;
      state.name = payload.name;
      state.isAdmin = payload.isAdmin;
      state.avatar = payload.avatar;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentEmail = (state) => state?.auth?.email;
export const selectCurrentToken = (state) => state?.auth?.token;
export const selectUserImage = (state) => state?.auth?.avatar;
export const selectIsAdmin = (state) => state?.auth?.isAdmin;
