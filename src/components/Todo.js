import React from 'react';

function Todo({ todo, isComplete, removeTodo }) {
    function checkboxClicked() {
        isComplete(todo.id);
    }
    function removeClick() {
        removeTodo(todo.id);
    }

    return (
        <div style={{display: 'flex'}}>
        <input 
            type="checkbox" 
            onClick={checkboxClicked}
        />
        <li
        style={{
            color: 'black',
            textDecoration: todo.completed ? "line-through" :null
        }}
        >{todo.task}</li>
        <button
            onClick={removeClick}
        >Done</button>
        </div>
    );
    
}

export default Todo;