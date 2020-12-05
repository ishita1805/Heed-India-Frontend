import React from 'react'
import './centerIcon.css'

const CenterIcon = ({src, label, value, onClick,...props}) => {
    return (
        <button
        className="icon-city"
        onClick={onClick}>
            <img src={src} alt="" className="center-image"/>
            <h4>{label}</h4>
        </button>
    )
}

export default CenterIcon
