import React from 'react'
import Todo from './todo'

function TodoList({ todos, onRemoveTodo, OnUpdateTodo }) {
    return (
        <div style={{ width: "100%", marginTop: "20px" }}>
            {
                todos && todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo}
                        onRemoveTodo={onRemoveTodo} onUpdateTodo={OnUpdateTodo} />
                })
            }

        </div>

    )
}

export default TodoList