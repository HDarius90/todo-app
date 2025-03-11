import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../utils/firebase/firebase.utils';
import { NavigateFunction } from 'react-router-dom';
import { UserState } from './user.types';

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    googleSignInStart: (state, action: PayloadAction<NavigateFunction>) => {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess: (
      state,
      action: PayloadAction<UserData & { id: string }>
    ) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signInFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { googleSignInStart, signInSuccess, signInFailed } =
  userSlice.actions;

export default userSlice.reducer;
