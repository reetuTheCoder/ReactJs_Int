import React from "react";
import "./App.css";
import ReactionTestGame from "./Componnet/ReactionTestGame";
import ValidateForm from "./Componnet/ValidateForm";
import LabelFilterDashboard from "./Componnet/LabelFilterDashboard";

function App() {
  return (
    <div className="App">
      <ReactionTestGame />
      <br />
      <br />
      <br />
      <ValidateForm />
      <br/>
      <br/>
      <br/>
      <LabelFilterDashboard/>
    </div>
  );
}

export default App;
