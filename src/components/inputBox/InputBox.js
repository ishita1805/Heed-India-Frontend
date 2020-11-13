import React, { Fragment } from 'react'
import './inputbox.css'

function InputBox(props) {
    return (
        <Fragment>
            <label className="label"> {props.label}</label>
            <br/>
            <input
             onChange={props.onChange}
            className={props.className} 
            value={props.value}
            placeholder={props.placeholder}
            />
        
        </Fragment>
    )
    }
export default InputBox
