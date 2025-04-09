import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from './todo.types';

const TODO_INITIAL_STATE: TodoState = {
  allTodos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: TODO_INITIAL_STATE,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.allTodos.push(action.payload);
    },
    addTodoStart: (state, action: PayloadAction<string>) => {
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

export const { addTodo, addTodoStart, toggleTodo, removeTodo, removeAllTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
