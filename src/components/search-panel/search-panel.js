import {React, Component} from "react";
import "./search-panel.scss";

const SearchPanel = () => {
    return (
        <div className="search_block">
            <input
                className="search_panel"
                type="text"
                placeholder="Search..."
            />
            <button type="submit" className="search_button">Search</button>
        </div>
    )
}

export default SearchPanel;