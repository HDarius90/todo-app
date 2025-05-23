import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeAllTodo } from '../../store/todo/todo.slice';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TodoForm from '../todo-form/todo-form.componenet';
import TodoList from '../todo-list/todo-list.component';
import {
  NotebookContainer,
  NotebookFooter,
  TodoCounter,
} from './notebook.styles';

const Notebook = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.allTodos);
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
