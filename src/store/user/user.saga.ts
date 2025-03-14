import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import {
  AdditionalInformation,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';
import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
} from './user.slice';

type GoogleSignInStart = ReturnType<typeof googleSignInStart>;
type EmailSignInStart = ReturnType<typeof emailSignInStart>;

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

export function* signInWithEmail({
  payload: { email, password, navigate },
}: EmailSignInStart) {
  try {
    if (!email || !password) return 'Email or password is missing';
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
    navigate('/');
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(emailSignInStart.type, signInWithEmail);
}

export function* onSignOutStart() {
  yield* takeLatest(signOutStart.type, signOut);
}

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
