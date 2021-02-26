import React, { useState } from 'react'
import './navigation.css'
import { NavLink } from "react-router-dom";
import img from '../../assets/logo_footer.png'
import imgdark from '../../assets/logo.png'

const Navigation = ({loc,...props}) => {
  const [nav,setNav] =useState(false);
  const dark = ["/blog","/events","/initiatives"]
  const navHandler = ()=>{
      setNav(!nav);
  }
  console.log(loc)
  // console.log(props.loc);
    if(loc !=="/admin" || (loc.includes("/admin") && localStorage.getItem('pass')) ) return (
        <>
        {/* for small screen nav header */}
        <div className="small-nav">
          <div className={nav?"nav-cross":"nav-cross box-shadow"} onClick={navHandler}>
            <div className={nav?"new-1 cross":"cross"}></div>
            <div className={nav?"new-2":"cross"}></div>
            <div className={nav?"new-3 cross":"cross"}></div>
          </div>
          <img  alt="" src={(dark.includes(loc) || loc.includes("/blog"))?imgdark:img} className="logo" />
        </div>

        {loc.includes("/admin")?
        // for admin portal
        <>
        <div className={nav?"Nav2":"Navigation"}>
          <NavLink exact to="/admin/createBlog" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Create Blog</NavLink>
          <NavLink exact to="/admin/view" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">My Blogs</NavLink>
          <NavLink exact to="/admin/messages" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Messages</NavLink>
          <NavLink exact to="/admin/support" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Supports</NavLink>
          <NavLink exact to="/admin/donations" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Donations</NavLink>
          <NavLink exact to="/admin/change-content" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Edit Content</NavLink>
          <NavLink exact to="/" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Home</NavLink>
          
          <div className="logo-nav">
            <img alt="" src={imgdark} className="logo" />
          </div>
        </div> 

        <div className="Navigation2">
          <NavLink exact to="/admin/createBlog" className="nav-item" activeClassName="nav-item-active">New Blog</NavLink>
          <NavLink exact to="/admin/view" className="nav-item" activeClassName="nav-item-active">My Blogs</NavLink>
          <NavLink exact to="/admin/messages" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Messages</NavLink>
          <NavLink exact to="/admin/support" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Supports</NavLink>
          <NavLink exact to="/admin/donations" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Donations</NavLink>
          <NavLink exact to="/admin/change-content" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Edit Site</NavLink>
          <NavLink exact to="/" className="nav-item" activeClassName="nav-item-active">Home</NavLink>
          <div className="logo-nav">
            <img  alt="" src={imgdark} className="logo" />
          </div>
        </div> 
        </>:
        // for the client side
        <>
        <div className={nav?"Nav2":"Navigation"}>
          <NavLink exact to="/" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Home</NavLink>
          <NavLink exact to="/about-us" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Who Are We</NavLink>
          <NavLink exact to="/sports" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Sports</NavLink>
          <NavLink exact to="/events" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Events</NavLink>
          <NavLink exact to="/initiatives" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Initiatives</NavLink>
          {/* <NavLink exact to="/our-branches" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Our Branches</NavLink> */}
          <NavLink exact to="/donate" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Donate Now</NavLink>
          {/* <NavLink exact to="/raise-money" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Raise Money</NavLink> */}
          <NavLink exact to="/our-mission" className="nav-item" onClick={navHandler} activeClassName="nav-item-active">Our Mission</NavLink>
          <div className="logo-nav">
            <img alt="" src={(dark.includes(loc) || loc.includes("/blog"))?imgdark:img} className="logo" />
          </div>
        </div> 

        <div className="Navigation2">
          <NavLink exact to="/" className="nav-item" activeClassName="nav-item-active">Home</NavLink>
          <NavLink exact to="/about-us" className="nav-item" activeClassName="nav-item-active">Who Are We</NavLink>
          <NavLink exact to="/sports" className="nav-item" activeClassName="nav-item-active">Sports</NavLink>
          <NavLink exact to="/events" className="nav-item" activeClassName="nav-item-active">Events</NavLink>
          <NavLink exact to="/initiatives" className="nav-item" activeClassName="nav-item-active">Initiatives</NavLink>
          {/* <NavLink exact to="/our-branches" className="nav-item" activeClassName="nav-item-active">Our Branches</NavLink> */}
          <div className="logo-nav">
            <img alt="" src={(dark.includes(loc) || loc.includes("/blog"))?imgdark:img} className="logo" />
          </div>
        </div> 
        </>
        }
    </>
    )
    else return null
   
}

export default Navigation
