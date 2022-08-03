import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AuthSlice from './AuthSlice.js';
import BannerSlice from './BannerSlice.js';
import ProductsSlice from './productsSlice.js';
import productSlice from './productSlice.js';
import cartSlice from './cartSlice.js';
import modalSlice from './modalSlice.js';

const reducer = {
  auth: AuthSlice,
  banners: BannerSlice,
  products: ProductsSlice,
  product: productSlice,
  cart: cartSlice,
  modal: modalSlice,
};

const store = configureStore(
  {
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  },
  applyMiddleware(thunk)
);

export default store;
