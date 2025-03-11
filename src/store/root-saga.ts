import { all, call } from 'typed-redux-saga/macro';
import { todoSagas } from './todo/todo.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
  yield* all([call(todoSagas), call(userSagas)]);
}