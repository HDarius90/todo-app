import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import {
  AdditionalInformation,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
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
  signUpFailed,
  signUpStart,
  signUpSuccess,
  checkUserSession,
} from './user.slice';

type GoogleSignInStart = ReturnType<typeof googleSignInStart>;
type EmailSignInStart = ReturnType<typeof emailSignInStart>;
type SignUpStart = ReturnType<typeof signUpStart>;
type SignUpSuccess = ReturnType<typeof signUpSuccess>;

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

export function* signUp({
  payload: { email, password, displayName, navigate },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(createUserDocumentFromAuth, user, { displayName });
      yield* put(signUpSuccess({ user, additionalDetails: { displayName } }));
    }
    navigate('/');
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
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

export function* onSignUpStart() {
  yield* takeLatest(signUpStart.type, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(signUpSuccess.type, signInAfterSignUp);
}

export function* onCheckUserSession() {
  yield* takeLatest(checkUserSession.type, isUserAuthenticated);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
