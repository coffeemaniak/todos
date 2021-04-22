import {React, Component} from "react";
import './App.css';
import Header from "../header";
import TodoList from "../todo-list";
import TodoAddForm from "../todo-add-form";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <Header/>
      </header>
      <TodoList/>
      <TodoAddForm/>
    </div>
  );
}

export default App;
