import {React, Component} from "react";
import SearchPanel from "../search-panel";
import "./header.scss";
import logo from "./logo.png"

const Header = () => {
 return (
     <div className="header">
         <img src={logo} alt="logo" className="logo"/>
        {/* <h1 className="header_title">My Classic ToDoS</h1> */}
        <ul className="header_list">
            <li className="header_list-item">Today</li>
            <li className="header_list-item header_list-item--child">Week</li>
            <li className="header_list-item header_list-item--child">Month</li>
            <li className="header_list-item header_list-item--child">Important</li>
            <li className="header_list-item header_list-item--child">Archieve</li>
        </ul>
        <SearchPanel/>
     </div>
 )
}

export default Header;