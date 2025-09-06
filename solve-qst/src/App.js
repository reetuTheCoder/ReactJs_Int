import React from "react";
import "./App.css";
import SaveLSInputData from "./Componnet/SaveLSInputData";
import MainProgressBar from "./Componnet/ProgressBar";
import SelectAllListItems from "./Componnet/SelectAllListItems";
import HoverCount from "./Componnet/HoverCount";

function App() {
  return (
    <div className="App">
      <SaveLSInputData />
      <br /> <br /> <br />
      <MainProgressBar />
      <br /> <br /> <br />
      <SelectAllListItems />
      <br /> <br /> <br />
      <HoverCount/>
    </div>
  );
}

export default App;
