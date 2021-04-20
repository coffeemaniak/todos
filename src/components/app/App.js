import {React, Component} from "react";
import './App.css';
import Header from "../header";
import TodoList from "../todo-list";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <Header/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
