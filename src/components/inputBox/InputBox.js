import React, { Fragment } from 'react'
import './inputbox.css'

function InputBox(props) {
    return (
        <Fragment>
            <label className="label"> {props.label}</label>
            <br/>
            <input
             type={props.type}
             onChange={props.onChange}
             className={`${props.className} input`} 
            //  value={props.value}
             placeholder={props.placeholder}
            />
        
        </Fragment>
    )
    }
export default InputBox
