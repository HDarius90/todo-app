import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TaskForm from '../task-form/task-form.componenet';
import {
  NotebookContainer,
  NotebookFooter,
  TaskCounter,
} from './notebook.styles';
import TaskList from '../task-list/task-list.component';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Notebook = () => {
  const [tasks, setTasks] = useState<Task[]>([
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
      <TaskForm />
      <TaskList tasks={tasks} />
      <NotebookFooter>
        <TaskCounter>You have no pending task</TaskCounter>
        <Button buttonType={BUTTON_TYPE_CLASSES.clear}>Clear All</Button>
      </NotebookFooter>
    </NotebookContainer>
  );
};

export default Notebook;
