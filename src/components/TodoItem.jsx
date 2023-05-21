import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MyButton } from './UI/Button/MyButton';

export const TodoItem = ({ todo }) => {
  const router = useNavigate();

  return (
    <div className="todo">
        <div className="todo-content">
            <strong>{ todo.id }. { todo.title }</strong>
            <div>
                { todo.body }
            </div>
        </div>
        <div className="todo-btns">
            <MyButton onClick={() => router(`todo/${todo.id}`)}>
                Full info
            </MyButton>
            <MyButton onClick={() => props.remove(todo.id)}>
                remove
            </MyButton>
        </div>
    </div>
  )
}
