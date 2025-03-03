import { useState } from 'react';
import { TodoInput } from './todo-form.stlyes';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/todo.slice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && text.trim()) {
      event.preventDefault();
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <TodoInput
      placeholder="Enter new todo"
      rows={1}
      value={text}
      onChange={(event) => setText(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TaskForm;
