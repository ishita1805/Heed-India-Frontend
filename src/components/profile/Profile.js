import React from 'react'
import './profileMedia.css'
import img from '../../assets/events.jpg';


export default function Profile() {
  
    return (
      <div style={{background: `url(${img})`}}className='profile'>
        <div className='profile-in'>
          <h1>Making the good visible</h1>
          <div className="profile-sub"></div>
          <p className = "sp-subtitle">Join hands with HEED India as it <span className="green-home">organizes</span> events</p>
        </div>
      </div>
    )
}
