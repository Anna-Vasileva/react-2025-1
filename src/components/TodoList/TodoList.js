import React, { Component } from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p>{text}</p>
          <button className="TodoList__text" onClick={() => onDeleteTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
