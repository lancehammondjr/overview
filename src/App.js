import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function isComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));

    }

    return (
        <div>
        <header className="todo">
            <p>ToDo List</p>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                isComplete={isComplete} 
                removeTodo={removeTodo}
            />
        </header>
        </div>
    );
    
}

export default App;