import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
