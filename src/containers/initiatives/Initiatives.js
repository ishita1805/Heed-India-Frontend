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
    const [val,setVal] = useState('One Book To Read')
    const [red,setRed] = useState(false);
    const butonRef = useRef();
    const intoViewRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const array =[
        {
            num: '01',
            text: 'Sports Training',
            subtext: 'One line description about the initiative',
            url: sponsorAChild,
            color:'blue-icon',
            para: 'HEED India identifies kids with potential and an interest in sports. This is followed by intensive training sessions under qualified coaches. The training is structured to instil a spirit of ambition, readying the child for competitive participation. Every aspect of the sport is emphasized upon, ensuring correct posture, and an ability to keep injury to the minimum. The training sessions are designed to transform the child holistically, thus creating better citizens of tomorrow. ',
        },
        {
            num: '02',
            text: 'Participation in Tournaments',
            subtext: 'One line description about the initiative',
            url: donate,
            color:'green-icon',
            para: 'Having undergone training under the eagle eye of the trainer, the child is encouraged to participate in competitive tournaments. This instills confidence and a sense of self-esteem in the children, while readying them to accept both, victory and defeat with equanimity.',
        },
        {
            num: '03',
            text: 'Provision of Sports Kits',
            subtext: 'One line description about the initiative',
            url: give,
            color:'purple-icon',
            para:'Every child is provided with comfortable tee shirts, track suits, protective gear, and even high-end gloves and sports equipment, making sure the child is not put under any pressure to procure these items. This small gesture gives the child a sense of belonging, thus building camaraderie amongst all.',
        },
        {
            num: '04',
            text: 'Collection Drives',
            subtext: 'One line description about the initiative',
            url: give,
            color:'red-icon',
            para:'HEED India conducts regular collection drives to gather sport equipment as well as books. These drives offer opportunities to individuals and corporates to contribute and be a part of HEED India’s various activities.',
        },
        {
            num: '05',
            text: 'One Book To Read',
            subtext: 'One line description about the initiative',
            url: give,
            color:'blue-icon',
            para:'To encourage children to develop the habit of reading, particularly in an age where digitalisation has taken over lives, the ‘1BookTo Read’ initiative by HEED India makes physical books available to all, especially children from challenging environments. The online classes have taken children further away from reading books. Thanks to this initiative, a number of videos have reached us featuring kids sharing a synopsis of their favourite books besides speaking about what inspired them to read them.',
        },
        {
            num: '06',
            text: 'Digital Health Literacy',
            subtext: 'One line description about the initiative',
            url: give,
            color:'green-icon',
            para:'‘Liberate’ is a unique app which ensures that those with less developed digital skills should receive the best possible care and are not inadvertently excluded. The app gives one’s doctor or even a family member access to one’s health records and medicines, besides tracking symptoms. All this and more, at the click of a button.',
        },
    ]

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
