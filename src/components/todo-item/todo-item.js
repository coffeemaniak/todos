import {React, Component} from "react";
import "./todo-item.scss";

const TodoItem = () => {
    return (
        <li>
            <span>
                Task one
            </span>
            <div>
                <button 
                type="button"
                className="button_important">
                    Important
                </button>
                <button 
                type="button"
                className="button_arcieve">
                    Move to Archieve
                </button>
            </div>
        </li>
    )
}

export default TodoItem;