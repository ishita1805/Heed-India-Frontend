import React, { Fragment } from 'react'

function InputBox(props) {
    return (
        <Fragment>
        <label>
            <input onChange={props.onChange}
            className={props.className} value={props.value}>{props.label}</input>
        </label>
        </Fragment>
    )
    }
export default InputBox
