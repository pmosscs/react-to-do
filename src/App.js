import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks, "this is here");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
      <List />
    </div>
  );
}

export default App;
