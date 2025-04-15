import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  User,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { Todo } from '../../store/todo/todo.types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'todo-app-db-698b2',
  storageBucket: 'todo-app-db-698b2.firebasestorage.app',
  messagingSenderId: '239152901816',
  appId: '1:239152901816:web:eb6ae94bda050e9e14ce4d',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const addTodoToFirestore = async (newTodo: Todo) => {
  try {
    await setDoc(doc(db, 'todos', newTodo.id), newTodo);
  } catch (error) {
    console.error('Error adding todo to Firestore:', error);
  }
};

export const fetchTodosFromFirestore = async (userId: string) => {
  try {
    const todosRef = collection(db, 'todos');
    const q = query(todosRef, where('ownerId', '==', userId));
    const querySnapshot = await getDocs(q);

    const todos = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Todo),
    }));

    return todos;
  } catch (error) {
    console.error('Error fetching todos from Firestore:', error);
    throw error;
  }
};

export const updateTodoInFirestore = async (
  id: string,
  data: Partial<Todo>
) => {
  try {
    const todoRef = doc(db, 'todos', id);
    await updateDoc(todoRef, data);
  } catch (error) {
    console.error('Error updating todo in Firestore:', error);
    throw error;
  }
};
