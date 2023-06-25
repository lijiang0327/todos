import { create } from 'zustand';

export type ToDoItem = {
  content: string
  checked: boolean
  id: string
};

export type ToDoListState = {
  todos: ToDoItem[]
  addTodo: (todo: ToDoItem) => void
  setTodoChecked: (todo: ToDoItem) => void
  deleteTodoItem: (id: string) => void
  setTodos: (todos: ToDoItem[]) => void
};

export const useToDoListStore = create<ToDoListState>((set) => ({
  todos: [],
  addTodo: (todo: ToDoItem) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  setTodoChecked: (todo: ToDoItem) => {
    set((state) => {
      const index = state.todos.findIndex((item) => {
        return item.id === todo.id;
      });

      if (index === -1) return {};

      const { content, id } = state.todos[index];
      const arr = [...state.todos];
      arr.splice(index, 1, { content, id, checked: todo.checked });
      return { todos: [...arr] };
    });
  },
  deleteTodoItem: (id) => {
    set((state) => ({ todos: state.todos.filter((item) => item.id !== id) }));
  },
  setTodos: (todos) => {
    set({ todos: [...todos] });
  }
}));
