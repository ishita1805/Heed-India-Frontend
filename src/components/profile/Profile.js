import React from 'react'
import './profileMedia.css'
import img from '../../assets/logo.png';
import Button from '../../components/button/Button';

const data = [
  {
    label:'Posts',
    value:'164'
  },
  {
    label:'Followers',
    value:'2318 '
  },
  {
    label:'Following',
    value:'696 '
  },
]

export default function Profile() {
    return (
      <>
        <div className="profile">

          <div className="profile-image">
            <img src={img} alt=''></img>
          </div>    

          <div className='content-profile'>

            <div className='row-profile'>
                <h3>heedindia.ngo</h3>
                <Button label='Follow' className='primary'/>
            </div>

            <div className='profile-stats'>
              {
               data.map((item)=> (
                <div className='stat-specific'>
                  <b>{item.label}</b>
                  {item.value}
                </div>
               )) 
              }
            </div>

            <div className='profile-bio'>
              A small description of the NGO and a link to blogs or other work can come here
              Heed India (Health and Education)
            </div>

          </div>

        </div>  
        <div className='profile-bio-2'>
            A small description of the NGO and a link to blogs or other work can come here
            Heed India (Health and Education)
        </div>
      </>
    )
}
