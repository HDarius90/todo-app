import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './todo.types';
import { v4 as uuidv4 } from 'uuid';

const TODO_INITIAL_STATE: TodoState = {
  allTodos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: TODO_INITIAL_STATE,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.allTodos.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.allTodos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeAllTodo: (state) => {
      state.allTodos = [];
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, removeAllTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
