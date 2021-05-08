import React from "react";
import TodoItem from "../todo-item";
import "./todo-list.scss";
import { Component } from "react";
import {db} from "../service/firebase";

export default class TodoList extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
            db.collection("inProcess")
            .get()
            .then(snapshot => 
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    label: doc.label,
                ...doc.data()})))
            .then(data => this.setState({data: data}));
    }

    render() {
        console.log(this.state);
         return ( 
             <div>
             <ul className="todo_list">
            <li className="todo_item">
            {
                this.state.data.map(data => <TodoItem key={data.id} label={data.label}/>)
            }
                
            </li></ul>
            </div>
        );
    }
} 
