import { createSlice } from '@reduxjs/toolkit';
import { UserActions } from '../../Admin/components/Users/Helpers/UserListConstants.js';

const initialState = {
  userId: '',
  userAction: UserActions.Close,
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.userAction = action.payload.action;
      state.userId = action.payload.userId;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.action = UserActions.Close;
      state.userId = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
