import React, {useEffect, useState, useRef} from 'react'
import './initiatives.css'
import Button from '../../components/button/Button'
import sponsorAChild from '../../assets/sponsorAChild.png'
import donate from '../../assets/donateIcon.png'
import give from '../../assets/give.png'
import Card from '../../components/cardMission/cardsMission'
import { useForm } from 'react-hook-form';
import DropDown from '../../components/dropDown/DropDown'
import { Redirect } from 'react-router-dom'

const Initiatives = () => {
    const { register, handleSubmit, errors } = useForm();
    const [val,setVal] = useState('One book to read')
    const [red,setRed] = useState(false);
    const butonRef = useRef();
    const intoViewRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const array =[
        {
            num: '01',
            text: 'One Book To Read',
            subtext: 'One line description about the initiative',
            url: sponsorAChild,
            color:'blue-icon',
            para: 'We urgently need your support to help needy children receive good education, health and nutrition. Sponsor a child for one of more of his/her needs. Sponsor a child NOW!​',
        },
        {
            num: '02',
            text: 'One Book To Read',
            subtext: 'One line description about the initiative',
            url: donate,
            color:'green-icon',
            para: 'Your donation will help provide critical support to all beneficiaries of the programmes we undertake. Donate for a cause NOW! spread smiles and joy',
        },
        {
            num: '03',
            text: 'One Book To Read',
            subtext: 'One line description about the initiative',
            url: give,
            color:'purple-icon',
            para:' Your donation will ensure that our projects create the most impact. Your money will be utilised in areas that you will feel most strongly about.',
        },
    ]

    const dropdownArray = [
        'One Book To Read',
        'One Book To Read',
        'One Book To Read',
        'One Book To Read',
        'One Book To Read',
        'One Book To Read',
        'One Book To Read',
    ]


    const handleOnClick = () => {
        intoViewRef.current.scrollIntoView({behavior: "smooth",block: "end"});
    }

    const onSubmit =(data)=>{
       console.log(data)
    }
     const formButtonHandler = () => {
        butonRef.current.click();
     }

    return (
        <div className='in-body background-initiate'>
            {red?<Redirect to="/donate" exact />:null}
            <div className='init-land'>
                    <h1><span className="green-home">Join Our</span> Initiative</h1>
                    <p>Do we have a moral obligation to help people we do not know? If so, why?</p>
                    <h2><span className="green-home">#be</span><span className="green-home-1">the</span><span className="green-home-2">change</span></h2>
                    <Button
                    className="success"
                    label="Donate Now"
                    onClick={()=>setRed(true)}/>
            </div>
            <div className='init-secs'>
                {array.map(item=>(
                <div>
                    <h1>{item.num} <span className='vr-bar' style={{fontWeight:300}}>|</span></h1>
                    <div className='white-content-init'>
                            <h3>{item.text}</h3>
                            <p>{item.subtext}</p>
                    </div>
            
                    <i className="fa fa-chevron-down" onClick={handleOnClick}></i>
                </div>
                ))}
            </div>

            <div id="give-little-of-you" className='init-whitesec' ref={intoViewRef}>
                <h2>Our Initiatives</h2>
                <div className="grid-mission">
                { array.map((item)=>(
                    <Card
                    heading={item.text}
                    para={item.para}
                    img={item.url}
                    color={item.color}
                    />
                ))}
                </div>
            </div>

            <div className='init-whitesec-2'>
                <h2>Give Little of You</h2>
                <p> Find a programme to support or fund! fill up the form and we will reach out to you 😇</p>
                <DropDown value={val} values={dropdownArray} returnVal={(data)=>setVal(data)}/>
                <form className='form-init' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input gly' name='name' type="text" placeholder="Enter Name" ref={register({ required: true })}/>
                    {errors.name?<p className="error-text">Name is required</p>:null}
                    <input className='input gly' name='number' type="number" placeholder="Enter Number" ref={register({ required: true })}/>
                    {errors.number?<p className="error-text">Number is required</p>:null}
                    <input className='input gly' name='email' type="email" placeholder="Enter Email" ref={register({ required: true })}/>
                    {errors.email?<p className="error-text">Email is required</p>:null}
                    <button ref={butonRef} style={{display:'none'}}>Submit</button>
                </form>
                <Button 
                label='Submit'
                onClick={formButtonHandler}
                className='primary'
                />
            </div>
        </div>
    )
}

export default Initiatives
