import { createAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { USER_ACTION_TYPES } from './user.types';
import { UserData } from '../../utils/firebase/firebase.utils';

export type GoogleSignInAction = {
  payload: {
    navigate: NavigateFunction;
  };
};

export const googleSignInStart = createAction<NavigateFunction>(
  USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
);

export const signInSuccess = createAction<UserData & { id: string }>(
  USER_ACTION_TYPES.SIGN_IN_SUCCESS
);

export const signInFailed = createAction<Error>(
  USER_ACTION_TYPES.SIGN_IN_FAILED
);
