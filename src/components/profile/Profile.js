import React from 'react'
import './profileMedia.css'


var img = "https://static.wixstatic.com/media/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.jpg/v1/fill/w_204,h_222,al_c,q_80,usm_0.66_1.00_0.01/1f2275_1ec26c62602b4ef09365c9dc35636047~mv2.webp"


export default function Profile() {
    return (
        <div className="profile">
         <div className="profile-sec1">
{/* image */}
              <div class="profile-image">
                <img src={img} alt=""/>
              </div>
{/* name button and stats  */}
              <div class="profile-user-settings">
                <div className="row flex-start">
                  <h1 class="profile-user-name">heedindia.ngo</h1>
                  <button>Follow</button>
                </div>
                <div className="row">
                  <p className="stat-p">703 <b>Posts</b></p>
                  <p className="stat-p">2318 <b>Followers</b></p>
                  <p className="stat-p">696 <b>Following</b></p>
                </div>
                <p className="bio-profile-2">
                 A small description of the NGO and a link to blogs or other work can come here<br/>
                 Heed India (Health and Education)
                </p>
              </div>
         </div>
{/* stats for smaller screens */}
         <p className="bio-profile" >
            A small description of the NGO and a link to blogs or other work can come here<br/>
            Heed India (Health and Education)
          </p>
        </div>
    )
}

