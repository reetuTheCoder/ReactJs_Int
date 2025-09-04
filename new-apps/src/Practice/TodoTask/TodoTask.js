import React, { useState } from "react";

const TodoTask = () => {
  const [inputdata, setInputdata] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputs = (e) => {
    setInputdata(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputdata.trim() !== "") {
      const addTodos = {
        id: Date.now(),
        textVal: inputdata.trim(),
      };
      setTasks([...tasks, addTodos]);
      setInputdata("");
    }
  };

  const handleDelete = (id) => {
    console.log("delete todo", id);
    setTasks(
      tasks.filter((task)=> {
        console.log("task.id", task.id);
        
       return task.id !== id
      })
    );
  };

  return (
    <div>
      <h1>TodoTask</h1>
      <div>
        <input
          type="text"
          placeholder="Type here.."
          value={inputdata}
          onChange={handleInputs}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div>
        <ul>
          {tasks.map((task) => {
            return (
              <div key={task.id}>
                <li>
                  {/* <span>{task.id}</span> */}
                  {task.textVal}
                </li>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoTask;
