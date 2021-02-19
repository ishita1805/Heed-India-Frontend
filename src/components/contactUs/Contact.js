import React, { useState } from 'react'
import './contact.css'
import man from '../../assets/contact-us.png'
import axios from 'axios'
import url from '../../url'
import { useForm } from 'react-hook-form';

const Contact = ({loc,...props}) => {
    const [form,setForm] = useState(false);
    const [error,setError] = useState(0);
    const [buttonLabel,setButtonLabel] = useState('Submit');
    const { register, handleSubmit, errors } = useForm();

    const onSubmit =(data)=>{
            setButtonLabel('Processing');
            axios.post(url+"/contacts/connect",data)
            .then(()=>{
                setError(2);
            })
            .catch(()=>{
                setError(1);
            })
    }

    const formStateHandler = () => {
        setForm(!form);
        setError(0);
        setButtonLabel('Submit');
    }

    if(loc!=="/admin") return (
        <div className={form?"contact-us black-bg-contact":"contact-us"}>
            {form?
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <h4>Name</h4>
                    <input name='name' type="text" placeholder="Jon Snow" ref={register({ required: true })}/>
                    {errors.name?<p>Name is required</p>:null}

                    <h4>Number</h4>
                    <input name='number' type="number" placeholder="+91 9009009009" ref={register({ required: true })}/>
                    {errors.number?<p>Number is required</p>:null}

                    <h4>Email</h4>
                    <input name='email' type="email" placeholder="jon@example.com" ref={register({ required: true })}/>
                    {errors.email?<p>Email is required</p>:null}
                    
                    <h4>Message</h4>
                    <textarea name='message' placeholder="Tell us something nice" ref={register({ required: true })}/>
                    {errors.message?<p>Message is required</p>:null}

                    {error === 0?<button className='contact-form-button'>{buttonLabel}</button>:null}
                    {error === 1?<span>An error occured please try again later</span>:null}
                    {error === 2?<div className='contact-form-button'>Thank You</div>:null}
            </form>:
            null}
        <div onClick={formStateHandler} className="contact-icon">
            <img src={man} alt=""/>
        </div>
        </div>
    )
    else return null
}

export default Contact
