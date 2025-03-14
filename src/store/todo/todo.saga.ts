import { addTodo, toggleTodo, removeTodo } from './todo.slice';
import { all, call, takeLatest } from 'typed-redux-saga/macro';

function* addTodoSaga(action: ReturnType<typeof addTodo>) {
  // Handle any side effects here if necessary
  console.log('addTodoSaga triggered', action.payload);
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
  yield* takeLatest(addTodo.type, addTodoSaga);
  yield* takeLatest(toggleTodo.type, toggleTodoSaga);
  yield* takeLatest(removeTodo.type, removeTodoSaga);
}

export function* todoSagas() {
  yield* all([call(watchTodoActions)]);
}