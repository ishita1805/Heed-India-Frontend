import React from 'react'
import './cardmission.css'

function Cards({heading,para,...props}) {
    return (
        <div className="mission-card">
            <a href="/"><span id="circleIcons"></span></a>
            <h3>{heading}</h3>
            <p> 
                {para}
            </p>
        </div>
    )
}

export default Cards
