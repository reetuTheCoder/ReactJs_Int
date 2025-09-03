import React, { useState } from "react";

const TodoTask = () => {
  const [inputdata, setInputdata] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputs = (e) => {
    setInputdata(e.target.value);
  };

  const handleSubmit = () => {
    if (inputdata.trim() !== "") {
      setTasks([...tasks, inputdata]);
      setInputdata("");
    }
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
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoTask;
