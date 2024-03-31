import {useState} from 'react';

export default function Todo(){
    const [todos, setTodos] = useState([]);
    let input;
    function handleChange(e){
        input = e.target.value;
        setTodos((prev)=>([...prev, input]))
    }
    function handleClick(){
        const todoList = document.getElementById('todoList');
        todoList.textContent = todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))
        input = '';
    }
    return(
        <>
        <label htmlFor='TODO'>TODO</label>
        <input onChange={handleChange} id='TODO' />
        <input type='submit' onClick={handleClick} value='submit'/>
        <ul id='todoList'>
           
        </ul>
        </>
    )
}