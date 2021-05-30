import React from 'react'
import { NavLink } from "react-router-dom";
import './bottomNav.css'

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <NavLink exact to="/donate" className="nav-item" activeClassName="nav-item-active">Donate</NavLink>
            <NavLink exact to="/our-mission" className="nav-item" activeClassName="nav-item-active">Our Mission</NavLink>
            <NavLink exact to="/people-behind" className="nav-item" activeClassName="nav-item-active">People Behind</NavLink>
        </div>
    )
}

export default BottomNav
