import {React, Component} from "react";
import "./todo-add-form.scss";

const TodoAddForm = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Add new task"
            />
            <button 
            type="submit"
            className="add_button">
                Add
            </button>
        </form>
    )
}

export default TodoAddForm;