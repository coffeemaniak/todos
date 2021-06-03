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
            <button className="dropdown">Menu</button>
            <div className="header_list-item--content">
                <li className="header_list-item">Today</li>
                <li className="header_list-item">Week</li>
                <li className="header_list-item">Month</li>
                <li className="header_list-item">Important</li>
                <li className="header_list-item">Archieve</li>
            </div>
            
        </ul>
        <SearchPanel/>
     </div>
 )
}

export default Header;