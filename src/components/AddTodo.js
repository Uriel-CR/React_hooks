import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const addTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: { id: Date.now(), text } });
      setText("");
    }
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={addTodo}>Agregar</button>
    </div>
  );
};

export default AddTodo;
