export interface IAddTodo {
  id: string;
  name: string;
  priority: string;
  completed: boolean;
}

export interface IFilterTodo {
  search: string;
  status: string;
  priority: string[]
}