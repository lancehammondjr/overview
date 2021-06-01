import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function onChangeHandler(event) {
        setTodo({ ...todo, task: event.target.value });
    }

    function onClickHandler(event) {
        //get the value 'text' from the state
        //append that value into the todos array
      event.preventDefault();
      if (todo.task.trim()) {
          addTodo({ ...todo, id:uuid() });
          //reset task input
          setTodo({ ...todo, task: ''});
      }
    }

    return (
        <form onSubmit={onClickHandler}>
            <input 
                name= 'task'
                type= 'text'
                value= {todo.task}
                onChange={onChangeHandler}
            
            />
            <button
                type= 'submit'
            >Submit</button>
        </form>
    );
    
}

export default TodoForm;