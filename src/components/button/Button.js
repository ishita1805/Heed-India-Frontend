import React, {Fragement} from 'react'

function Button(props) {
    return (
        <Fragment>
        <label>
            <button 
            className={props.className}
            onClick={props.onClick}>{props.label}</button>
        </label>
        </Fragment>
    )
}

export default Button
