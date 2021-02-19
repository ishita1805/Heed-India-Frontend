import React from 'react'
import './ICardSports.css'

function ICard({img,...props}){
    return(
        <div className = "card-img">
            <img src = {img} alt = "Image"/>
        </div>
    )
}

export default ICard