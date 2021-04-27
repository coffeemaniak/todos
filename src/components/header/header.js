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
            <li className="header_list-item">In process</li>
            <li className="header_list-item">Archieve</li>
        </ul>
        <SearchPanel/>
     </div>
 )
}

export default Header;