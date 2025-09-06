import React from "react";
import "./App.css";
import SaveLSInputData from "./Componnet/SaveLSInputData";
import MainProgressBar from "./Componnet/ProgressBar";
import SelectAllListItems from "./Componnet/SelectAllListItems";

function App() {
  return (
    <div className="App">
      <SaveLSInputData />
      <br /> <br /> <br />
      <MainProgressBar />
      <br /> <br /> <br />
      <SelectAllListItems />
    </div>
  );
}

export default App;
