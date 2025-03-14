import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AdditionalInformation,
  UserData,
} from '../../utils/firebase/firebase.utils';
import { NavigateFunction } from 'react-router-dom';
import { UserState } from './user.types';
import { RootState } from '../store';
import { User } from 'firebase/auth';

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

type EmailSignInPayload = {
  email: string;
  password: string;
  navigate: NavigateFunction;
};

type SignUpSuccessPayload = {
  user: User;
  additionalDetails: AdditionalInformation;
};

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    googleSignInStart: (state, action: PayloadAction<NavigateFunction>) => {
      state.isLoading = true;
      state.error = null;
    },
    emailSignInStart: (state, action: PayloadAction<EmailSignInPayload>) => {
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
    signOutStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    signOutFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signUpStart: (
      state,
      action: PayloadAction<EmailSignInPayload & { displayName: string }>
    ) => {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
      state.isLoading = false;
      state.error = null;
    },
    signUpFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
} = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
