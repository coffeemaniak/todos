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

    // deleteItem (id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const before = data.slice(0, index);
    //         const after = data.slice(index + 1);

    //         const newArr = [...before, ...after];
    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    // onToggleImportant(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const old = data[index];
    //         const newItem = {...old, important: !old.important};

    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    render() {
        console.log(this.state);
         return ( 
             <div>
                <ul className="todo_list">
                    
                        {
                        this.state.data.map(data => 
                        <TodoItem 
                            key={data.id} 
                            label={data.label} 
                            important={data.important}
                            // onToggleImportant={this.onToggleImportant} 
                            finished={data.done}/>)
                        }
                    
                </ul>
            </div>
        );
    }
} 
