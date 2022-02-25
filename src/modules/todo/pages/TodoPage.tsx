import React, { useState } from "react";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters"
import { Typography, Divider } from 'antd';
import store from "../redux/store";
import { Provider } from "react-redux";

const { Title } = Typography;

const TodoPage = () => {
  
  return <Provider store={store}>
    <div
    style={{
      width: 500,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 20,
      boxShadow: '0 0 10px 4px #bfbfbf',
      borderRadius: 5,
      height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  </Provider>
}

export default TodoPage