import React from "react"
import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IAddTodo } from "../../../models/todo";

const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: []
  },
  todoList: [
    {id: '1', name: 'Learn Yoga', completed: false, priority: 'Medium'},
    {id: '2', name: 'Learn Redux', completed: true, priority: 'High'},
    {id: '3', name: 'Learn JavaScript', completed: false, priority: 'Low'},
  ]
}

export const addTodo = createCustomAction('todoList/addTodo', (data: IAddTodo) => ({
  data,
}));
const actions = { addTodo };
type Action = ActionType<typeof actions>;

const rootReducer = (state = initState, action: Action) => {
  console.log(state, action);
  switch(action.type) {
    case'todoList/addTodo' :
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {id: '3', name: 'Learn JavaScript', completed: false, priority: 'Low'}
        ],
      }
    default: 
      return state
  }
}

export default rootReducer;