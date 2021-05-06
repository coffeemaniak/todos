import React from "react";
import TodoItem from "../todo-item";
import "./todo-list.scss";

const TodoList = ({posts}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
    
    return (
            <li key={id} className="todo_item">
                <TodoItem {...itemProps}/>
            </li>
    )
});
    return (
        <ul className="todo_list">
            {elements}
        </ul>
    )
}

export default TodoList;