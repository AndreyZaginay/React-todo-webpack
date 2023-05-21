import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MyButton } from './UI/Button/MyButton';
import '../assets/css/todo.css'

export const TodoItem = ({ todo, remove, number }) => {
  const router = useNavigate();

  return (
    <div className="todo">
        <div className="todo-content">
            <strong>{ number }. { todo.title }</strong>
            <div>
                { todo.body }
            </div>
        </div>
        <div className="todo-btns">
            <MyButton onClick={() => router(`todo/${todo.id}`)}>
                Full info
            </MyButton>
            <MyButton onClick={() => remove(todo.id)}>
                remove
            </MyButton>
        </div>
    </div>
  )
}
