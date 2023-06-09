import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, remove }) => {

    if (!todos.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Todos not found
            </h1>
        )
    }
    return (
        <div className='todolist'>
            {todos.map((todo, index) => 
                <TodoItem todo={todo} key={index} number={index + 1} remove={remove}/>
            )}
        </div>
    )
}
