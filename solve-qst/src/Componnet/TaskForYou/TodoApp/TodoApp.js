import React, { useState } from "react";

const TodoApp = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (inputVal.trim() === "") return "";
    const newTask = {
      id: Date.now(),
      text: inputVal,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    console.log("you Clicked delete", id);
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleAllDelete = () => {
    setTodos([]);
  };

  const handleTaskCompleted = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = () => {
    return todos.filter((task) => task.completed).length;
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
            <div>
              {todos.map((task) => (
                <li key={task.id} onClick={() => handleTaskCompleted(task.id)}>
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(task.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </div>
          </ul>

          {todos.length > 1 && (
            <div>
              <button onClick={handleAllDelete}>All Todo Delete</button>
            </div>
          )}

          {completedCount() > 0 && (
            <div>
              <button>Number of task completed: {completedCount()}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
