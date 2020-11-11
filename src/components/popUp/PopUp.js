import React from 'react'
import './popUp.css'

const PopUp = ({label,onClick,children, ...props}) => {
    return (
        <div className="pop-up">
            <div className="pop-up-container">
                <div className="popup-cross" onClick={onClick}><i class="fa fa-times" aria-hidden="true"></i></div>
                <h3>{label}</h3>
                {children}
            </div>
        </div>
    )
}

export default PopUp
