export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
    todos: Todo[];
  }