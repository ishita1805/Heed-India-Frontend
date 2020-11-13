import React, {Fragment} from 'react'
import './button.css'

function Button({label,className,onClick, ...props}) {
    return (
        <Fragment>
            <button className={`${className} button-style`} onClick={onClick} >
                {label}
            </button>
        </Fragment>
    )
}

export default Button
