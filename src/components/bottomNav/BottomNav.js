import React from 'react'
import { NavLink } from "react-router-dom";
import './bottomNav.css'

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <NavLink exact to="/donate" className="nav-item" activeClassName="nav-item-active">Donate</NavLink>
            {/* <NavLink exact to="/raise-money" className="nav-item" activeClassName="nav-item-active">Raise Money</NavLink> */}
            <NavLink exact to="/our-mission" className="nav-item" activeClassName="nav-item-active">Our Mission</NavLink>
        </div>
    )
}

export default BottomNav
