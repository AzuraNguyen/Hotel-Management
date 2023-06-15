import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

import {SidebarData} from "./SidebarData";
import User from "../icons/user.svg"


import './Sidebar.css'

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="profile">
        <img src={User} style={{height:120, width:120}}/>
      </div>
      <div id="username">
        Nguyễn Thị A
      </div>
      <div id="position">
        Nhân viên
      </div>
      <ul className = "SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="nav_items">
              <NavLink to={val.link} className = {({isActive}) => "nav_links" + (isActive ? "_activated": "")}>
                <div id="sidebar_icon">{val.icon}</div>
                <div id="sidebar_title">{val.title}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar

