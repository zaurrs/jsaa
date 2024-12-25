import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  resetTodos,
  updateTodo,
} from "../../redux/features/TodoSlice"; 
import Navbar from "../../components/navbar/Navbar"; 
import "./Todo.css";

const TodoApp = () => {
  const [text, setText] = useState(""); 
  const [currentTodo, setCurrentTodo] = useState(null); 
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch(); 

  const [modal, setModal] = useState(false); 

  const openModal = (todo) => {
    setModal(true);
    setCurrentTodo(todo); 
    setText(todo.text); 
  };


  const closeModal = () => {
    setModal(false);
    setCurrentTodo(null); 
    setText(""); 
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText("");
    }
  };
  const handleReset = () => {
    dispatch(resetTodos());
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleUpdateTodo = () => {
    if (currentTodo && text.trim()) {
      dispatch(updateTodo({ id: currentTodo.id, text }));
      closeModal();
    }
  };

  return (
    <>
      <Navbar />
      <div className="todo">
        {modal ? (
          <div className="modal">
            <h1>Update Todo</h1>
            <input
              type="text"
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              placeholder="Update todo"
            />
            <button onClick={closeModal}>Cancel</button>
            <button onClick={handleUpdateTodo}>Save</button>
          </div>
        ) : (
          <div className="todos">
            <h1>Todo List</h1>
            <input
              type="text"
              value={text} 
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a new todo"
            />
            <button className="button" onClick={handleAddTodo}>
              Add Todo
            </button>

            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none", 
                  }}
                >
                  <span onClick={() => handleToggleTodo(todo.id)}>
                    {todo.text}
                  </span>
                  <button
                    className="delete"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => openModal(todo)}>Update</button>
                </li>
              ))}
            </ul>

            <button className="reset" onClick={handleReset}>
              Reset Todos
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoApp;
