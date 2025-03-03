import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './todo.types';

const initialState: TodoState = {
  todos: [
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
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeAllTodo: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, removeAllTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
