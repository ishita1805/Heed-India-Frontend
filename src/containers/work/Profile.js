import React from 'react'
import './ourWork.css'
import './profileMedia.css'


var img = "https://static.wixstatic.com/media/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.jpg/v1/fill/w_204,h_222,al_c,q_80,usm_0.66_1.00_0.01/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.webp"


export default function Profile() {
    return (
        <div>
            <div class="profile">
    
          <div class="profile-image">
    
            <img src={img} alt=""/>
    
          </div>
    
          <div class="profile-user-settings">
    
            <h1 class="profile-user-name">heedindia.ngo</h1>
    
            <button class="btn profile-edit-btn">Follow</button>
 
          </div>
    
          <div class="profile-stats">
    
            <ul>
              <li><span class="profile-stat-count">164</span> posts</li>
              <li><span class="profile-stat-count">188</span> followers</li>
              <li><span class="profile-stat-count">206</span> following</li>
            </ul>
    
          </div>
    
          <div class="profile-bio">
    
            <p><span class="profile-real-name">Heed India</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
    
          </div>
    
        </div>
        </div>
    )
}
