import React from 'react'
import './profileMedia.css'


var img = "https://static.wixstatic.com/media/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.jpg/v1/fill/w_204,h_222,al_c,q_80,usm_0.66_1.00_0.01/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.webp"


export default function Profile() {
    return (
      <div class="container">

        <div class="profile">
    
          <div class="profile-image">
    
            <img src={img} alt=""></img>
    
          </div>
    
          <div class="profile-user-settings">
    
            <h1 class="profile-user-name">heedindia.org</h1>
    
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
    
            <p><span class="profile-real-name">Heed India Foundation.</span><br/>  A small description of the NGO and a link to blogs or other work can come here</p>
    
          </div>
    
        </div>  
    </div>
    )
}

