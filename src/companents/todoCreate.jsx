import React, { useState } from 'react'
import '../App.css'
import TodoList from './todoList'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');
    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }
    return (
        <div>
            <div className='create-todo'>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className='todo-input' type='text' placeholder='Todo Giriniz'></input>
                <button onClick={createTodo} className='button-1'>Todo Oluştur</button>
            </div>

        </div>
    )
}

export default TodoCreate
