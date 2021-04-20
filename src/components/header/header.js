import {React, Component} from "react";
import "./header.css";

const Header = () => {
 return (
     <div className="header">
        <h1 className="header_title">My Classic ToDoS</h1>
        <ul className="header_list">
            <li className="header_list-item">In process</li>
            <li className="header_list-item">Archieve</li>
        </ul>
     </div>
 )
}

export default Header;