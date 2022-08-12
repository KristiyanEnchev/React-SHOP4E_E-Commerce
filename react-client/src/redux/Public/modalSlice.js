import { createSlice } from '@reduxjs/toolkit';
import { UserActions } from '../../Admin/components/Helpers/UserListConstants.js';

const initialState = {
  objectId: '',
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
      state.objectId = action.payload.objectId;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.action = UserActions.Close;
      state.objectId = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
