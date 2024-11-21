import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [ediTable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  }
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px", marginTop: "20px" }}>
      <div>
        {
          ediTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "380px" }}
            className='todo-input' type='text' /> : content
        }
      </div>
      <div style={{ display: "flex", marginRight: "350px" }}>
      </div>
      <div style={{ display: "flex", row: "20px" }} >
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {
          ediTable ? <FaCheck className='todo-icons' onClick={updateTodo} />
            : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
        }


      </div>
    </div>
  )
}

export default Todo
