import React, { useEffect, useState } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'));
  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter(todo => todo.id !== todoId)]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
      <TodoForm create={createTodo}/>
      <TodoList todos={todos} remove={removeTodo}/>
    </div>
  )
}
