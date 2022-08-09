import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productService from '../../Services/productService.js';

const initialState = {
  banners: {},
  status: 'idle',
  error: null,
};

export const getBanners = createAsyncThunk('products/banner', async () => {
  const res = await productService.getBanners();
  return res;
});

const bannerSlice = createSlice({
  name: 'banners',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getBanners.pending]: (state) => {
      state.status = 'loading';
    },
    [getBanners.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.banners = action.payload;
    },
    [getBanners.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const selectBanners = (state) => state.banners.banners;

const { reducer } = bannerSlice;
export default reducer;
