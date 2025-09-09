import React from "react";
import "./App.css";
import ReactionTestGame from "./Componnet/ReactionTestGame";
import ValidateForm from "./Componnet/ValidateForm";
import LabelFilterDashboard from "./Componnet/LabelFilterDashboard";
import ThemeToggle from "./Componnet/ThemeToggle";
import TimerWithLocalSt from "./Componnet/ExpertLevelQst/TimerWithLocalSt";

function App() {
  return (
    <div className="App">
      <ReactionTestGame />
      <br />
      <br />
      <br />
      <ValidateForm />
      <br />
      <br />
      <br />
      <LabelFilterDashboard />
      <br />
      <br />
      <br />
      <ThemeToggle />

      <TimerWithLocalSt/>
    </div>
  );
}

export default App;
