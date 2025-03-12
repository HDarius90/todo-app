import {
  TodoItem,
  List,
  TrashIcon,
  Checkbox,
  TodoContent,
} from './todo-list.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeTodo, toggleTodo } from '../../store/todo/todo.slice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.allTodos);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          <Checkbox type="checkbox" checked={todo.completed} />
          <TodoContent>{todo.text}</TodoContent>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.delete}
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            <TrashIcon />
          </Button>
        </TodoItem>
      ))}
    </List>
  );
};

export default TodoList;
