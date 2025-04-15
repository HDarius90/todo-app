import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { v4 as uuid4 } from 'uuid';
import {
  addTodoToFirestore,
  fetchTodosFromFirestore,
  getCurrentUser,
  removeTodoFromFirestore,
  updateTodoInFirestore,
} from '../../utils/firebase/firebase.utils';
import {
  addTodo,
  addTodoStart,
  fetchTodo,
  removeTodo,
  setTodos,
  toggleTodo,
} from './todo.slice';

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

function* fetchTodosSaga() {
  try {
    const user = yield* call(getCurrentUser);
    if (!user) return;

    const todos = yield* call(fetchTodosFromFirestore, user.uid);

    yield* put(setTodos(todos));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

function* toggleTodoSaga(action: ReturnType<typeof toggleTodo>) {
  try {
    const { id, completed } = action.payload;

    yield* call(updateTodoInFirestore, id, { completed });

    console.log(`Todo with ID ${id} toggled to ${completed}`);
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
}

function* removeTodoSaga(action: ReturnType<typeof removeTodo>) {
  try {
    yield* call(removeTodoFromFirestore, action.payload);
  } catch (error) {
    console.log('Error removing todo:', error);
  }
}

function* watchTodoActions() {
  yield* takeLatest(fetchTodo.type, fetchTodosSaga);
  yield* takeLatest(addTodoStart.type, addTodoSagaStart);
  yield* takeLatest(toggleTodo.type, toggleTodoSaga);
  yield* takeLatest(removeTodo.type, removeTodoSaga);
}

export function* todoSagas() {
  yield* all([call(watchTodoActions)]);
}
