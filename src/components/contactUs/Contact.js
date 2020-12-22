import React, { useState } from 'react'
import './contact.css'
import man from '../../assets/contact-us.png'
import axios from 'axios'
import uri from './../../uri'

const Contact = () => {
    const [form,setForm] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [message,setMessage] = useState('');

    const updateName = e =>{
        setName(e.target.value);
    }
    const updateEmail = e =>{
        setEmail(e.target.value);
    }
    const updateNumber = e =>{
        setNumber(e.target.value);
    }
    const updateMessage = e =>{
        setMessage(e.target.value);
    }

    const onSubmit =()=>{

        const query={
            name:name,
            email:email,
            number:number,
            message:message,
        }
        console.log(query);
        if(name===""||email===""||number===""||message==="")
        {
            window.alert('Fill in the appropriate details');
        }
        else{
            axios.post(uri+"/contacts/connect",query)
            .then(res=>{
                if(res.data==='error')
                {
                    window.alert('Fill in the appropriate details');
                    
                }
                else{
                    console.log('Thank you');
                    window.alert('Thank you');
    
                }
            })
        }
       
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className={form?"contact-us black-bg-contact":"contact-us"}>
            {form?
            <div className="contact-form">
                    <h4>Name</h4>
                    <input type="text" required={true} value={name} onChange={updateName} placeholder="Jon Snow"/>
                    <h4>Number</h4>
                    <input type="number" required={true} value={number} onChange={updateNumber} placeholder="+91 9009009009"/>
                    <h4>Email</h4>
                    <input type="email" required={true} value={email} onChange={updateEmail} placeholder="jon@example.com"/>
                    <h4>Message</h4>
                    <textarea value={message} required={true} onChange={updateMessage} placeholder="Tell us something nice"/>
                    <button onClick={onSubmit}>Submit</button>
            </div>:
            null}
        <div onClick={()=>setForm(!form)} className="contact-icon">
            <img src={man} alt=""/>
        </div>
        </div>
    )
}

export default Contact
