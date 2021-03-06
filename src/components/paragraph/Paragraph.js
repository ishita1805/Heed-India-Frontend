import React from 'react'
import './paragraph.css'

const Paragraph = (props) => {
    return (
        <div>
        <p className ={`p-text ${props.className}`}>
            {props.text}
        </p>
    </div>
    )
    
}
    

export default Paragraph