import React from "react";
import "./App.css";
import SaveLSInputData from "./Componnet/SaveLSInputData";
import MainProgressBar from "./Componnet/ProgressBar";
import SelectAllListItems from "./Componnet/SelectAllListItems";
import HoverCount from "./Componnet/HoverCount";
import InputMsgEnter from "./Componnet/InputMsgEnter";
import BuutonActionOnClick from "./Componnet/BuutonActionOnClick";

function App() {
  return (
    <div className="App">
      <SaveLSInputData />
      <br /> <br /> <br />
      <MainProgressBar />
      <br /> <br /> <br />
      <SelectAllListItems />
      <br /> <br /> <br />
      <HoverCount />
      <br /> <br /> <br />
      <InputMsgEnter />
      <br /> <br /> <br />
      <BuutonActionOnClick />
    </div>
  );
}

export default App;
