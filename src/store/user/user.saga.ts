import { all, call, put, takeLatest } from 'typed-redux-saga';
import { USER_ACTION_TYPES } from './user.types';
import {
  AdditionalInformation,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';
import { GoogleSignInAction, signInFailed, signInSuccess } from './user.action';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle(action: GoogleSignInAction) {
  try {
    const { navigate } = action.payload;
    const { user } = yield* call(signInWithGooglePopup);
    if (user) {
      yield* call(getSnapshotFromUserAuth, user);
    }
    if (navigate) {
      navigate('/');
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield* all([call(onGoogleSignInStart)]);
}
