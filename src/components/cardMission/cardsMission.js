import React from 'react'
import './cardmission.css'

function Cards({heading,para,img,color,...props}) {
    return (
        <div className="mission-card">
            <a href="/">
                <span id="circleIcons" className={color}>
                    <img src={img} alt="icon" className="iconimage"/>
                </span>
            </a>
            <h3>{heading}</h3>
            <div className={`icon-mission-line ${color}`}></div>
            <p> 
                {para}
            </p>
        </div>
    )
}

export default Cards
