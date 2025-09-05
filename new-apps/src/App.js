import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Child1 from "./CallBackHook/Child1";
import Child2 from "./CallBackHook/Child2";
// import {
//   CreateCounter,
//   LocalStorageExample,
//   Timer,
//   WindowSize,
// } from "./Study/StateManage/SideEffect";
// import PerformanceOptimization, { DerivedState } from "./Study/StateManage/PerformanceOptimization";
// import ContactForms from "./contactForms/ContactForms";
// import CounterApps from "./counter/CounterApps";
// import TodoTask from "./TodoTask/TodoTask";

function App() {
  const [count, setCount] = useState(0);

  const handleClickMe = useCallback(() => {
    console.log("just testing to pass in the child");
  },[]);
  // const [showTimer, setShowTimer] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // console.log("Runs once after 3s");
  //     setShowTimer(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className="App">
      {/* <CounterApps />
      <br /> <br /> <br />
      <ContactForms />
      <br /> <br /> <br />
      <TodoTask /> */}

      {/* <CreateCounter />
      <br /> <br /> <br />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <Timer />}
      <br /> <br /> <br />
      <LocalStorageExample />
      <br /> <br /> <br />
      <WindowSize /> */}

      {/* <div>
        <PerformanceOptimization/>
        <DerivedState />
      </div> */}

      <div>
        <div>
          <div>
          <h1>Learn callback hook</h1>
          <p>Count: {count}</p>
          <button onClick={()=> setCount(count + 1)}>Add</button>
        </div>
        <br/> <br/> <br/>
        <Child1 onClick={handleClickMe}/>
         <br/>
        <Child2/>
        </div>
      </div>
    </div>
  );
}

export default App;
