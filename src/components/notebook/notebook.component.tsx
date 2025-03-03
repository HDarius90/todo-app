import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TodoForm from '../todo-form/todo-form.componenet';
import {
  NotebookContainer,
  NotebookFooter,
  TodoCounter,
} from './notebook.styles';
import TodoList from '../todo-list/todo-list.component';
import { useDispatch } from 'react-redux';
import { removeAllTodo } from '../../store/todo/todo.slice';

const Notebook = () => {
  const dispatch = useDispatch();

  return (
    <NotebookContainer>
      <TodoForm />
      <TodoList />
      <NotebookFooter>
        <TodoCounter>You have no pending task</TodoCounter>
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
