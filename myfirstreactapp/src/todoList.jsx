import React, { useState } from 'react';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setTodos(prev => [...prev, { text: input, id: Date.now(), completed: false }]);
        setInput('');
    }

    function handleDelete(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    function handleToggleComplete(id) {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    return (
        <>
            <label htmlFor='TODO'>TODO</label>
            <input onChange={handleChange} id='TODO' value={input} />
            <button onClick={handleClick}>Submit</button>
            <ul id='todoList'>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
