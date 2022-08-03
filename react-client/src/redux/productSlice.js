import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productService from '../Services/productService.js';

const initialState = {
  loading: false,
  error: null,
  _id: '',
  name: '',
  slug: '',
  image: '',
  images: '',
  category: '',
  description: '',
  price: '',
  countInStock: '',
  rating: '',
  numReviews: '',
  reviews: '',
};

export const getProductBySlug = createAsyncThunk(
  'product/:slug',
  async (slug) => {
    const res = await productService.getProductBySlug(slug);
    return res;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
  },
  extraReducers: {
    [getProductBySlug.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProductBySlug.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.name = payload.name;
      state.slug = payload.slug;
      state.image = payload.image;
      state.images = payload.images;
      state.category = payload.category;
      state.description = payload.description;
      state.price = payload.price;
      state.countInStock = payload.countInStock;
      state.rating = payload.rating;
      state.numReviews = payload.numReviews;
      state.reviews = payload.reviews;
      state._id = payload._id;
    },
    [getProductBySlug.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default productSlice.reducer;

export const selectProduct = (state) => state?.product;
