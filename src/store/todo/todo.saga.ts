import {
  addTodoToFirestore,
  getCurrentUser,
} from '../../utils/firebase/firebase.utils';
import { addTodo, toggleTodo, removeTodo, addTodoStart } from './todo.slice';
import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { v4 as uuid4 } from 'uuid';

function* addTodoSagaStart(action: ReturnType<typeof addTodoStart>) {
  try {
    const user = yield* call(getCurrentUser);

    const todo = {
      id: uuid4(),
      text: action.payload,
      ownerId: user?.uid || null,
      completed: false,
    };

    if (user) {
      yield* call(addTodoToFirestore, todo);
    }

    yield* put(addTodo(todo));
  } catch (error) {
    console.error('Error adding todo:', error);
  }
}

function* toggleTodoSaga(action: ReturnType<typeof toggleTodo>) {
  // Handle any side effects here if necessary
  console.log('toggleTodoSaga triggered', action.payload);
}

function* removeTodoSaga(action: ReturnType<typeof removeTodo>) {
  // Handle any side effects here if necessary
  console.log('removeTodoSaga triggered', action.payload);
}

function* watchTodoActions() {
  yield* takeLatest(addTodoStart.type, addTodoSagaStart);
  yield* takeLatest(toggleTodo.type, toggleTodoSaga);
  yield* takeLatest(removeTodo.type, removeTodoSaga);
}

export function* todoSagas() {
  yield* all([call(watchTodoActions)]);
}
