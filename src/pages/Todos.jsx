import React, { useEffect, useState } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const AllTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(AllTodos);

  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter(todo => todo.id !== todoId)]);
  }

  useEffect(() => {
    if(todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos])

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className='App'>
      <TodoForm create={createTodo}/>
      <TodoList todos={todos} remove={removeTodo}/>
    </div>
  )
}
