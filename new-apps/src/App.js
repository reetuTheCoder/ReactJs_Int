import "./App.css";
import ContactForms from "./contactForms/ContactForms";
import CounterApps from "./counter/CounterApps";
import TodoTask from "./TodoTask/TodoTask";

function App() {
  return (
    <div className="App">
      <CounterApps />
      <br /> <br /> <br />
      <ContactForms />
      <br /> <br /> <br />
      <TodoTask />
    </div>
  );
}

export default App;
