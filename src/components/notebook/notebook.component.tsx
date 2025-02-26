import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import TaskForm from '../task-form/task-form.componenet';
import {
  NotebookContainer,
  NotebookFooter,
  TaskCounter,
} from './notebook.styles';

const Notebook = () => {
  return (
    <NotebookContainer>
      <TaskForm />
      {/* <TaskList /> */}
      <NotebookFooter>
        <TaskCounter>You have no pending task</TaskCounter>
        <Button buttonType={BUTTON_TYPE_CLASSES.clear}>Clear All</Button>
      </NotebookFooter>
    </NotebookContainer>
  );
};

export default Notebook;
