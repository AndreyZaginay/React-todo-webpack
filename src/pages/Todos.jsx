import React, { useEffect, useState } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    setTodos(JSON.parse(localStorage.getItem('posts') || []));
  }

  const patchTodos = () => {
    localStorage.setItem('posts',JSON.stringify(todos));
  }

  const createTodo = () => {
    setTodos([...todos, newTodo]);
    patchTodos(todos);
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
      <TodoForm/>
      <TodoList todos={todos}/>
    </div>
  )
}
