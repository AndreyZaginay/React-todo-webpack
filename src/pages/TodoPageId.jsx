import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const TodoPageId = () => {

  const [todo, setTodo] = useState({});
  const params = useParams();

  useEffect(() => {
  // setTodo()
  console.log(JSON.parse(localStorage.getItem('todos')));
  console.log(params.id);
  }, [])

  return (
    <div>
      <h1>You have openned the post link by id</h1>
      <div>{todo.id}. {todo.title}</div>
    </div>
  )
}
