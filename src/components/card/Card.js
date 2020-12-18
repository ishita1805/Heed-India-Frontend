import React from 'react'
import './card.css'
const Card = ({className,children,...props}) => {
    return (
        <div className={`${className} card-container`}>
            {children}
        </div>
    )
}

export default Card
