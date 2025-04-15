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

  const handleToggle = (id: string, event: React.MouseEvent<HTMLLIElement>) => {
    // If the event target is the checkbox, ignore the click event
    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === 'checkbox'
    ) {
      return;
    }

    event.stopPropagation();
    const todo = todos.find((todo) => todo.id === id);
    dispatch(toggleTodo({ id, completed: !todo?.completed }));
  };

  const handleCheckboxChange = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    dispatch(toggleTodo({ id, completed: !todo?.completed }));
  };

  const handleRemove = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    dispatch(removeTodo(id));
  };

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          onClick={(e) => handleToggle(todo.id, e)}
        >
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <TodoContent>{todo.text}</TodoContent>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.delete}
            onClick={(e) => handleRemove(todo.id, e)}
          >
            <TrashIcon />
          </Button>
        </TodoItem>
      ))}
    </List>
  );
};

export default TodoList;
