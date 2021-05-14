import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import './about.css'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = (props) => {
    const [red,setRed] = useState(false);
    const [path,setPath] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0)
        // console.log(props.state)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
          });
      }, [props.state])
      
    const dataList = [
        {
            number: 8900,
            label: 'Books Collected',
        },
        {
            number: 4400,
            label: 'Books Donated',
        },
        {
            number: 3700,
            label: 'Students Coached ',
        },
    ]
    return (
        <div className="in-body col background-about">
            {red?<Redirect exact to = {path}/>:null}
           <div className="about-section">
                <div className="abt-sec abt-dark-ov">
                    <h1><span className="green-home">Who</span> We Are</h1>
                    {/* <h1><span className="green-home">Something </span>Great</h1> */}
                </div>
           </div>

           <div className="abt-sec abt-white">
               <div className="about-row-in">
                    <h3 data-aos='fade-up'>On a mission to provide and aid</h3>
                    <p data-aos='fade-up'>
                    A trademarked initiative of Samarpan Charitable Trust, HEED India was established as a registered
                    non-profit organization in 2012.<br/>
                    ‘You must be the change you want to see in the world’ – Mahatma Gandhi
                    And this is precisely the path chosen by HEED India.<br/>
                    Sports, Health and Education are the cornerstones of any progressive nation. And these very factors
                    constitute the foundation of HEED India. Driven by passion are three dynamic people, who came
                    together to be the change they wish to see in the world.
                    </p>
                    <p data-aos='fade-up'>
                    Today, HEED India endeavours to touch as many lives as possible, through the medium of Sports,
                    Health and Education. When children are offered basic education, coupled with lessons in sports, they
                    are well-equipped to face life. With a myriad activities, professional coaches, and generous donors,
                    HEED India is all set to change lives for the youth, especially from challenging backgrounds
                    </p>
                    <p>
                    A child involved in Sports is likely to lead a healthy life. Lesser sick days mean more days at school.
                    HEED India’s activities are thus inter-connected, and directed towards the well-being of the child.<br/>
                    Be it the ‘1BookToRead’ initiative, or the unique sports the children are being trained in, HEED India
                    has chosen the road less travelled. A holistically developed child, is a nation’s treasure. And, HEED
                    India is gearing up to create a treasure trove of talented, confident and robust citizens of tomorrow.
                    </p>
               </div>
               <div className="about-row-in">
                    <iframe
                    title="Heed India Video"
                    className="iframe-abt"
                    src="https://www.youtube.com/embed/UclKT_bQMFo" 
                    frameborder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
               </div>
           </div>


           <div className="abt-semi">
               {dataList.map((item)=>(
                   <CountUp start={0} end={item.number} duration={2} redraw preserveValue>
                   { ({countUpRef, start}) =>
                       <VisibilitySensor onChange={start} delayedCall>
                           <div className="abt-semi-in" data-aos='fade-up'>
                               <span className='num' ref={countUpRef} />
                               <h3>{item.label}</h3>
                           </div>
                       </VisibilitySensor>
                   }
                   </CountUp>
               ))}
           </div>


           <div className="dark-abt">

               <div className="dark-abt-cover" onClick={()=>{setRed(true);setPath('/donate')}} >
                   <div className="dac-1">
                        <h2>Donate<br/>For<br/>A Cause</h2>
                   </div>
                   <div className="dac-2">
                        Find out how your contribution to an individual and/or a project in India can help transform the future.
                   </div>
               </div>

               {/* <div className="dark-abt-cover" >
                    <div className="dac-1">
                        <h2>Raise<br/>Money</h2>
                   </div>
                   <div className="dac-2">
                   Find out how you can support our work through fundraising activities and events. Be a part of the movement.
                   </div>
               </div> */}

               <div className="dark-abt-cover" onClick={()=>{setRed(true);setPath('/initiatives#give-little-of-you')}}> 
                    <div className="dac-1">
                        <h2>Give<br/> little of<br/> YOU!</h2>
                   </div>
                   <div className="dac-2">
                   If you would like to join the movement and support us on any of our projects, we can show you how to partner with us to make a significant difference. 
                   </div>
               </div>

               <div className="dark-abt-cover" onClick={()=>{setRed(true);setPath('/our-mission')}}>
                    <div className="dac-1">
                        <h2>Our<br/>Mission</h2>
                    </div>
                   <div className="dac-2">
                    We endeavour to serve and support valuable lives. We aim to build a community that is vested in its own future and the society's well-being.
                   </div>
               </div>

           </div>
            
           
        </div>
    )
}

export default About
