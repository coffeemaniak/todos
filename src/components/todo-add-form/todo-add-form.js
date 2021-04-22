import {React, Component} from "react";

const TodoAddForm = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Add new task"
            />
            <button type="submit">
                Add
            </button>
        </form>
    )
}

export default TodoAddForm;