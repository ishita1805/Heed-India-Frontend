import React from 'react'
import './cardsports.css'

function Card({header, para1, para2, para3,...props}){
    return(
        <div className = "sports-card">
                <div className = "card-text">
                    <h1>{header}</h1>
                    <p className = "card-para-1">{para1}</p>
                    <p className = "card-para-2">{para2}</p>
                    <p className = "card-para-2">{para3}</p>
                </div>
        </div>
    )
}

export default Card