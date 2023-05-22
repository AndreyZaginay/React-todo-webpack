import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../assets/css/todo-page';

export const TodoPageId = () => {

  const [todo, setTodo] = useState({});
  const params = useParams();

  useEffect(() => {
  setTodo(JSON.parse(localStorage.getItem('todos')).find(({ id }) => id === +params.id));
  }, [])

  return (
    <div className='todo-page'>
      <h1>You have openned the post link by id</h1>
      <h4> {todo.title}</h4>
      <p>{ todo.body }</p>
    </div>
  )
}
