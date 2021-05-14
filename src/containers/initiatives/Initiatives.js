/* eslint-disable no-unused-vars */
import React, {useEffect, useState, useRef} from 'react'
import './initiatives.css'
import Button from '../../components/button/Button'
import Card from '../../components/cardMission/cardsMission'
import { useForm } from 'react-hook-form';
import DropDown from '../../components/dropDown/DropDown'
import { Redirect } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import axios from 'axios'
import url from '../../url'

const Initiatives = () => {
    const { register, handleSubmit, errors } = useForm();
    const [val,setVal] = useState('One Book To Read')
    const [red,setRed] = useState(false);
    const [click,setClick] = useState(false);
    const butonRef = useRef();
    const intoViewRef = useRef();
    const [content,setContent] = useState({
        cards:[{
            title:'',
            description:'',
            media:'',
        },
        {
            title:'',
            description:'',
            media:'',
        },
        {
            title:'',
            description:'',
            media:'',
        }],
        title:'',
        subtitle:'',
        hashtag:'',
        media:'',
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.post(`${url}/page/get`, { id: '609c2c12a0996a0bec3f4a48' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
         })
        .catch((e) => { console.log(e); })
      }, [])

    const array =[
        'blue-icon',
        'red-icon',
        'green-icon',
        'purple-icon',
        'orange-icon',
    ]

    const array2 =[
        {
            num: '01',
            text: content.cards[0].title,
            subtext: `${content.cards[0].description.substring(0,60)}...`,
        },
        {
            num: '02',
            text: content.cards[1].title,
            subtext: `${content.cards[1].description.substring(0,60)}...`,
        },
        {
            num: '03',
            text: content.cards[2].title,
            subtext: `${content.cards[2].description.substring(0,60)}...`,
        },
    ]
    // const array2=[]

    const dropdownArray = [
        'Sports Training',
        'Participation in Tournaments',
        'Provision of Sports Kits',
        'Collection Drives',
        'One Book To Read',
        'Digital Health Literacy'
    ]

    const handleOnClick = () => {
        intoViewRef.current.scrollIntoView({behavior: "smooth",block: "end"});
    }

    const onSubmit =(data)=>{
        const user ={
            name: data.name,
            email: data.email,
            number: data.number,
            val: val,
        }
        axios.post(url+'/supports/supportdata',user)
        .then( (res)=>{
            // console.log(res.data)
        })
        .catch((err) =>{
            // console.log(err)
        });
        setClick(true)
    }
    
    const formButtonHandler = () => {
        butonRef.current.click();
     }

    return (
        <div style={{ backgroundImage:`url(${content.media})`}} className='in-body background-initiate'>
            {red?<Redirect to="/donate" exact />:null}
            <div className='init-land'>
                    <h1>
                        {content.title.substring(0,content.title.indexOf(' '))}
                        <span className="green-home">
                            {` ${content.title.substring(content.title.indexOf(' ')+1)}`} 
                        </span>
                        
                    </h1>
                    <p className='sp-left'>
                       {content.subtitle}
                    </p>
                    <h2 className="green-hashtag">
                        <Typewriter 
                            options={{
                                strings: content.hashtag.split(' '),
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 50
                            }}
                        />
                    </h2>
                    <Button
                    className="success"
                    label="Donate Now"
                    onClick={()=>setRed(true)}/>
            </div>
            <div className='init-secs'>
                {array2.map(item=>(
                <div>
                    <h1>{item.num} <span className='vr-bar' style={{fontWeight:300}}>|</span></h1>
                    <div className='white-content-init'>
                            <h3>{item.text}</h3>
                            <p className='hide-init-cont'>{item.subtext}</p>
                    </div>
            
                    <i className="fa fa-chevron-down" onClick={handleOnClick}></i>
                </div>
                ))}
            </div>

            <div id="give-little-of-you" className='init-whitesec' ref={intoViewRef}>
                <h2>Our Initiatives</h2>
                <div className="grid-mission">
                { content.cards.map((item,index)=>{
                    let col;
                    if(array[index]) col=array[index];
                    else col=array[index%array.length];
                    return <Card
                    heading={item.title}
                    para={item.description}
                    img={item.media}
                    color={col}
                    />
                })}
                </div>
            </div>

            <div className='init-whitesec-2'>
                <h2>Give Little of You</h2>
                <p> Find a programme to support or fund! Fill up the form and we will reach out to you 😇</p>
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
                {
                    click?
                    <p className='support-thankyou'> Thank you for your support &#10084; </p>:
                    <Button 
                    label='Submit'
                    onClick={formButtonHandler}
                    className='primary'
                    />
                }
            </div>
        </div>
    )
}

export default Initiatives
