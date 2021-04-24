import {React, Component} from "react";
import "./todo-item.scss";

const TodoItem = ({label, important = false}) => {
    
    return (
        <li>
            <span>
                {label}
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