import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = (name) => {
  if (typeof window !== 'undefined') {
    const storage = localStorage.getItem(name);

    if (storage) return JSON.parse(localStorage.getItem(name));

    if (name === 'cartItems') return [];

    return 0;
  }
};

const initialState = {
  cartItems: getLocalStorage('cartItems'),
  amount: getLocalStorage('amount'),
  total: getLocalStorage('total'),
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].amount += 1;
      } else {
        const item = { ...action.payload, amount: 1 };
        state.cartItems.push(item);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },
    increase: (state, { payload }) => {
      // const cartItem = state.cartItems.find((item) => item._id === payload._id);
      // console.log(cartItem);
      // cartItem.amount = cartItem.amount + 1;
      return {
        cartItems: state.cartItems.map((product) =>
          product.id === payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrease: (state, { payload }) => {
      // const cartItem = state.cartItems.find((item) => item._id === payload._id);
      // cartItem.amount = cartItem.amount - 1;
      return {
        cartItems: state.cartItems.map((product) =>
          product.id === payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('total', JSON.stringify(total));
      localStorage.setItem('amount', JSON.stringify(amount));
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems;

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// addToCart: (state, action) => {
//   const itemIndex = state.cartItems.findIndex(
//     (item) => item._id === action.payload._id
//   );
//   if (itemIndex >= 0) {
//     state.cartitems[itemIndex].amount += 1;
//   } else {
//     const item = { ...action.payload, amount: 1 };
//     state.cartItems.push(item);
//   }
// },

// addToCart: (state, { payload }) => {
//   const { _id } = payload;
//   const itemExist = state.cartItems.find((item) => item._id === _id);
//   if (itemExist) {
//     return state.cartItems.map((item) => {
//       if (item._id === _id) {
//         return { ...item, amount: item.amount + 1 };
//       }
//       return item;
//     });
//   } else {
//     state.cartItems.push({ ...payload, amount: 1 });
//   }
// },
