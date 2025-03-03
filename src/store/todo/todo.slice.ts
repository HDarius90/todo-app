import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './todo.types';
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
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
