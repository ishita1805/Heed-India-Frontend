import React, { Fragment } from 'react'

function InputBox(props) {
    return (
        <Fragment>
        <label>{props.label}</label>
            <input 
            onChange={props.onChange}
            className={props.className} 
            value={props.value}>
            </input>
        </Fragment>
    )
    }
export default InputBox
