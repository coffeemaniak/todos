import {React, Component} from "react";
import "./todo-add-form.scss";

const TodoAddForm = () => {
    return (
        <form className="add_form">
            <input
                type="text"
                placeholder="Add new task"
                className="add_task"
            />
            <div className="checkbox_group">
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    Today
                </label>
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    This week
                </label>
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    This Month
                </label>
                <label className="checrkbox_group--label"> 
                    <input type="checkbox"/>
                    Important
                </label>
            </div>
            <button 
            type="submit"
            className="add_button">
                Add
            </button>
        </form>
    )
}

export default TodoAddForm;