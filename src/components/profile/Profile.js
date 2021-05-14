import React from 'react'
import './profileMedia.css'


export default function Profile(props) {
  
    return (
      <div style={{background: `url(${props.image})`}}className='profile'>
        <div className='profile-in'>
          <h1>{props.title}</h1>
          <div className="profile-sub"></div>
          <p className = "sp-subtitle">{props.subtitle}</p>
        </div>
      </div>
    )
}
