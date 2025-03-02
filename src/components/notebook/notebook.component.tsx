import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TodoForm from '../todo-form/todo-form.componenet';
import {
  NotebookContainer,
  NotebookFooter,
  TodoCounter,
} from './notebook.styles';
import TodoList from '../todo-list/todo-list.component';
import { Todo } from '../../store/todo/todo.types';

const Notebook = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Take out the trash', completed: false },
    { id: 2, text: 'Go for a walk', completed: false },
    { id: 3, text: 'VERRY LOOOOOOOOOOOOOOOONG TASK', completed: true },
    { id: 4, text: 'Push commits to develope', completed: true },
    { id: 5, text: 'Push commits to develope', completed: true },
    { id: 6, text: 'Push commits to develope', completed: true },
    { id: 7, text: 'Push commits to develope', completed: true },
    { id: 8, text: 'Push commits to develope', completed: true },
    { id: 9, text: 'Push commits to develope', completed: true },
    { id: 10, text: 'Push commits to develope', completed: true },
    { id: 11, text: 'Push commits to develope', completed: true },
    { id: 12, text: 'Push commits to develope', completed: true },
    { id: 13, text: 'Push commits to develope', completed: true },
    { id: 14, text: 'Push commits to develope', completed: true },
  ]);

  return (
    <NotebookContainer>
      <TodoForm />
      <TodoList todos={todos} />
      <NotebookFooter>
        <TodoCounter>You have no pending task</TodoCounter>
        <Button buttonType={BUTTON_TYPE_CLASSES.clear}>Clear All</Button>
      </NotebookFooter>
    </NotebookContainer>
  );
};

export default Notebook;
