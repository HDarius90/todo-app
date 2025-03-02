import { FC } from 'react';
import {
  TodoItem,
  List,
  TrashIcon,
  Checkbox,
  TodoContent,
} from './todo-list.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Todo } from '../../store/todo/todo.types';

type TaskListProps = {
  todos: Todo[];
};

const TaskList: FC<TaskListProps> = ({ todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} completed={todo.completed}>
          <Checkbox type="checkbox" checked={todo.completed} />
          <TodoContent>{todo.text}</TodoContent>
          <Button buttonType={BUTTON_TYPE_CLASSES.delete}>
            <TrashIcon />
          </Button>
        </TodoItem>
      ))}
    </List>
  );
};

export default TaskList;
