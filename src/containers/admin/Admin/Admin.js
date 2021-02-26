import React,{ useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './admin.css'

const Admin = () => {
    const [red,setRed] = useState(false);
    const [change,setChange] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        if(localStorage.getItem('pass')) setRed(true);
    }, [change])

    const onSubmit =(data)=>{
        // console.log(data);
        if(data.pass === 'heed-india-123' && data.name === 'heedIndia123') {
            localStorage.setItem('pass','heed-india-123')
            setChange(true);
        }
    }

    return (
        <div className="admin-login-page">
            {red?<Redirect exact to = '/admin/createBlog'/>:null}
            <h1>Welcome to the admin login</h1>
            <form className='admin-form' onSubmit={handleSubmit(onSubmit)}>
            <input className='input-admin' type='text' name='name' placeholder='Enter Username Here' ref={register({ required: true })}/>
            {errors.name?<p className='error-text'>Username is required</p>:null}
            <input className='input-admin' type='password' name='pass' placeholder='Enter Password Here' ref={register({ required: true })}/>
            {errors.pass?<p className='error-text'>Password is required</p>:null}
            <button className='button-style success'>Login</button>
            </form>
        </div>
    )
}

export default Admin
