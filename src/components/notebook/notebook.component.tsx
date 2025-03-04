import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TodoForm from '../todo-form/todo-form.componenet';
import {
  NotebookContainer,
  NotebookFooter,
  TodoCounter,
} from './notebook.styles';
import TodoList from '../todo-list/todo-list.component';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllTodo } from '../../store/todo/todo.slice';
import { RootState } from '../../store/store';

const Notebook = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const allActiveTask = todos.reduce(
    (taskCount, currentTask) =>
      currentTask.completed ? taskCount : taskCount + 1,
    0
  );

  return (
    <NotebookContainer>
      <TodoForm />
      <TodoList />
      <NotebookFooter>
        <TodoCounter>
          You have {allActiveTask ? allActiveTask : 'no'} pending task
        </TodoCounter>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.clear}
          onClick={() => dispatch(removeAllTodo())}
        >
          Clear All
        </Button>
      </NotebookFooter>
    </NotebookContainer>
  );
};

export default Notebook;
