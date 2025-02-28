import { FC } from 'react';
import { Task } from '../notebook/notebook.component';
import { TaskItem, TaskListContainer } from './task-list.styles';

type TaskListProps = {
  tasks: Task[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id} completed={task.completed}>
          <span>{task.text}</span>
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
