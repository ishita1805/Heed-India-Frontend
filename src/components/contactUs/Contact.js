import React, { useState } from 'react'
import './contact.css'
import man from '../../assets/contact-us.png'

const Contact = () => {
    const [form,setForm]=useState(false);
    return (
        <div className="contact-us">
            {form?
            <div className="contact-form">
                    <h4>Name</h4>
                    <input type="text" placeholder="Jon Snow"/>
                    <h4>Number</h4>
                    <input type="number" placeholder="+91 9009009009"/>
                    <h4>Email</h4>
                    <input type="email" placeholder="jon@example.com"/>
                    <h4>Message</h4>
                    <textarea placeholder="Tell us something nice"/>
                    <button>Submit</button>
            </div>:
            null}
        <div onClick={()=>setForm(!form)} className="contact-icon">
            <img src={man}/>
        </div>
        </div>
    )
}

export default Contact
