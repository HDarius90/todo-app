import { FC } from 'react';
import { Task } from '../notebook/notebook.component';
import {
  TaskItem,
  List,
  TrashIcon,
  Checkbox,
  TaskContent,
} from './task-list.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

type TaskListProps = {
  tasks: Task[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} completed={task.completed}>
          <Checkbox type="checkbox" checked={task.completed} />
          <TaskContent>{task.text}</TaskContent>
          <Button buttonType={BUTTON_TYPE_CLASSES.delete}>
            <TrashIcon />
          </Button>
        </TaskItem>
      ))}
    </List>
  );
};

export default TaskList;
