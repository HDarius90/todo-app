import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import {
  AdditionalInformation,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';
import { googleSignInStart, signInFailed, signInSuccess } from './user.slice';

type GoogleSignInStart = ReturnType<typeof googleSignInStart>;

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

export function* signInWithGoogle({ payload: navigate }: GoogleSignInStart) {
  console.log('signing in with google');
  try {
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
  yield* takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* userSagas() {
  yield* all([call(onGoogleSignInStart)]);
}
