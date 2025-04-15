export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  userId?: string | null;
}

export interface TodoState {
    allTodos: Todo[];
  }