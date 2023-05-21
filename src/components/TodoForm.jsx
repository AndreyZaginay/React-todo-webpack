import React, {useState} from 'react';

import { MyInput } from './UI/Input/MyInput';
import { MyButton } from './UI/Button/MyButton';

export const TodoForm = ({ create }) => {
    const [todo, setTodo] = useState({ title: '', body: ''});

    const addNewTodo = (e)  => {
      e.preventDefault();
      const newTodo = {
        ...todo, id: Date.now()
      }
      create(newTodo);
      setTodo({title: '', body: ''});
    }
  
    return(
        <div>    
            <form>
                <MyInput 
                    value={todo.title}
                    onChange={e => setTodo({...todo, title: e.target.value})}
                    type="text" 
                    placeholder="Todo title..."
                />
                <MyInput 
                    value={todo.body}
                    onChange={e => setTodo({...todo, body: e.target.value})}
                    type="text"
                    placeholder="Todos description..."
                />
                <MyButton onClick={addNewTodo}>Add todo</MyButton>
            </form>
        </div>
      )
}
