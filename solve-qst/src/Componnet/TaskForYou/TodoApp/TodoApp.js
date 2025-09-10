import React, { useState } from "react";

const TodoApp = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (inputVal.trim() === "") return "";
    const newTask = {
      id: Date.now(),
      text: inputVal,
    };
    setTodos([...todos, newTask]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    console.log("you Clicked delete", id);
    setTodos(todos.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h1>TodoApp</h1>
      <div>
        <input
          type="text"
          placeholder="Type here..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div>
        <div>
          <ul>
            {todos.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button onClick={()=> handleDelete(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
