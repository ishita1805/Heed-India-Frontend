import React, { Fragment } from 'react'

function InputBox(props) {
    return (
        <Fragment>
        <label>
            <input onChange={props.onChange}
            className={props.className}>{props.label}</input>
        </label>
        </Fragment>
    )
    }
export default InputBox
