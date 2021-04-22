import {React, Component} from "react";

const TodoItem = () => {
    return (
        <li>
            <span>
                Task one
            </span>
            <div>
                <button type="button">
                    Important
                </button>
                <button type="button">
                    Move to Archieve
                </button>
            </div>
        </li>
    )
}

export default TodoItem;