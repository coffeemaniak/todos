import React from "react";
import TodoItem from "../todo-item";
import "./todo-list.scss";

const TodoList = () => {
    return (
        <ul className="todo_list">
            <TodoItem label="hi there" impprtant/>
        </ul>
    )
}

export default TodoList;