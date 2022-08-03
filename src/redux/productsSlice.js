import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productService from '../Services/productService.js';

const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const getProducts = createAsyncThunk('products', async () => {
  const res = await productService.getProducts();
  return res;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // get products
    [getProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default productsSlice.reducer;

export const selectProducts = (state) => state?.products;
