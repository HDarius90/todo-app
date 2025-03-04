import { addTodo, toggleTodo, removeTodo } from './todo/todo.slice';
import { all, put, takeLatest } from 'typed-redux-saga/macro';

function* addTodoSaga(action: ReturnType<typeof addTodo>) {
  yield put(addTodo(action.payload));
}

function* toggleTodoSaga(action: ReturnType<typeof toggleTodo>) {
  yield put(toggleTodo(action.payload));
}

function* removeTodoSaga(action: ReturnType<typeof removeTodo>) {
  yield put(removeTodo(action.payload));
}

function* watchTodoActions() {
  yield takeLatest('todos/addTodoSaga', addTodoSaga);
  yield takeLatest('todos/toggleTodoSaga', toggleTodoSaga);
  yield takeLatest('todos/removeTodoSaga', removeTodoSaga);
}

export default function* rootSaga() {
  yield all([watchTodoActions()]);
}
