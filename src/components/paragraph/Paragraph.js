import React from 'react'
import './paragraph.css'

const Paragraph = (props) => {
    return (
        <div>
        <p className = "about-text">
            {props.text}
        </p>
    </div>
    )
    
}
    

export default Paragraph