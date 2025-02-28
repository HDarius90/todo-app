import { FC } from 'react';
import { Task } from '../notebook/notebook.component';
import { TaskListContainer } from './task-list.styles';

type TaskListProps = {
  tasks: Task[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
