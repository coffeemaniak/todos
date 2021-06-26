import {React, Component} from "react";
import "./todo-add-form.scss";

const TodoAddForm = () => {
    return (
        <div className="add_block">
        <form className="add_form">
            <input
                type="text"
                placeholder="Add new task"
                className="add_task"
            />
            <div className="checkbox_group">
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    <span>Today</span>
                </label>
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    <span>This week</span>
                </label>
                <label className="checrkbox_group--label">
                    <input type="checkbox"/>
                    <span>This Month</span>
                </label>
                <label className="checrkbox_group--label"> 
                    <input type="checkbox"/>
                    <span>Important</span>
                </label>
            </div>
            <button 
            type="submit"
            className="add_button">
                Add
            </button>
        </form>
        </div>
    )
}

export default TodoAddForm;