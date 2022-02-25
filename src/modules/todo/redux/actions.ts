import { IAddTodo } from "../../../models/todo"
// export const addTodoAction = {
//   type: 'todoList/addTodo',
//   payload: {id: 5, name: 'Learn Football', completed: false, priority: 'Low'}
// }

// action creators => function

export const addTodo = (data: IAddTodo) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
}