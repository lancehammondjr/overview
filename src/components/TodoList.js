import React from 'react';
import Todo from './Todo';

function TodoList({ todos, isComplete, removeTodo }) {
    return(
        <ul>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    isComplete={isComplete} 
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;