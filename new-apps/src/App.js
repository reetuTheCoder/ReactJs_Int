import React, { useEffect, useState } from "react";
import "./App.css";
import {
  CreateCounter,
  LocalStorageExample,
  Timer,
  WindowSize,
} from "./Study/StateManage/SideEffect";
// import ContactForms from "./contactForms/ContactForms";
// import CounterApps from "./counter/CounterApps";
// import TodoTask from "./TodoTask/TodoTask";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Runs once after 3s");
      setShowTimer(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {/* <CounterApps />
      <br /> <br /> <br />
      <ContactForms />
      <br /> <br /> <br />
      <TodoTask /> */}
      <CreateCounter />
      <br /> <br /> <br />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <Timer />}
      <br /> <br /> <br />
      <LocalStorageExample />
      <br /> <br /> <br />
      <WindowSize />
    </div>
  );
}

export default App;
