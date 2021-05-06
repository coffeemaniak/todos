import {React, Component, useState, useEffect} from "react";
import './App.css';
import Header from "../header";
import TodoList from "../todo-list";
import TodoAddForm from "../todo-add-form";
import { db } from "../service/firebase";



export default class App extends Component {
  // const [todos, setTodos] = useState([]);
  constructor(props) {
    super(props);
    this.state = {
      data: [
        db.collection("inProcess")
        .get()
        .then(snapshot => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(todos)
        })
      ]};
    }

    render() {
      return (
        <div className="App">
          <header className="App_header">
            <Header/>
          </header>
          <TodoList posts={this.state.data}/>
          <TodoAddForm/>
        </div>
      );
    }
  }
    

//   return (
//     <div className="App">
//       <header className="App_header">
//         <Header/>
//       </header>
//       <TodoList posts={todos}/>
//       <TodoAddForm/>
//     </div>
//   );
// }

// export default App;
