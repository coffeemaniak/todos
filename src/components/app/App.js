import {React, Component, useState, useEffect} from "react";
import './App.css';
import Header from "../header";
import TodoList from "../todo-list";
import TodoAddForm from "../todo-add-form";
import { db } from "../service/firebase";



export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   };
  // }

    render() {
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
  }
    


