import React, {Fragement} from 'react'

function Button(props) {
    return (
        <Fragement>
        <label>
            <button 
            className={props.className}
            onClick={props.onClick}>{props.label}</button>
        </label>
        </Fragement>
    )
}

export default Button
