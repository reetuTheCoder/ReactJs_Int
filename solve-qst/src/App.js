import React from "react";
import "./App.css";
import SaveLSInputData from "./Componnet/SaveLSInputData";
import MainProgressBar from "./Componnet/ProgressBar";

function App() {
  return (
    <div className="App">
      <SaveLSInputData />
      <br/>  <br/>  <br/>
      <MainProgressBar/>
    </div>
  );
}

export default App;
