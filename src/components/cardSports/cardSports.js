import React from 'react'
import './cardsports.css'

function Card({img,heading,p1,p2,p3,set,...props}){
    return(
        <div className={set===1?'sp-cont':'sp-cont-2'}>

             <div className='sp-card-text'>
                <h2>{heading}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>

            <div className='sp-card-img'>
                <img src={img} alt={heading}/>
            </div>
      </div>
    )
}

export default Card