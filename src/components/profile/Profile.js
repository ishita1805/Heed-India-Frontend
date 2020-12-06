import React from 'react'
import './profileMedia.css'
import {Link} from 'react-router-dom'


var img = "https://static.wixstatic.com/media/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.jpg/v1/fill/w_204,h_222,al_c,q_80,usm_0.66_1.00_0.01/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.webp"


export default function Profile() {
    return (
      <div className="container">

        <div className="profile">
    
          <div className="profile-image">
    
            <img src={img} alt=""></img>
    
          </div>
    
          <div className="profile-user-settings">
    
            <h1 className="profile-user-name">heedindia.org</h1>
    
           <a href="https://www.instagram.com/heedindia.ngo/"><button className="btn profile-edit-btn" >Follow</button></a>
          </div>
    
          <div className="profile-stats">
    
            <ul>
              <li><span className="profile-stat-count">164</span> posts</li>
              <li><span className="profile-stat-count">188</span> followers</li>
              <li><span className="profile-stat-count">206</span> following</li>
            </ul>
    
          </div>
    
          <div className="profile-bio">
    
            <p><span className="profile-real-name">Heed India Foundation.</span><br/>  A small description of the NGO and a link to blogs or other work can come here</p>
    
          </div>
    
        </div>  
    </div>
    )
}

