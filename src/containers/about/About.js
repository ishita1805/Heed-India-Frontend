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
            number: 7500,
            label: 'Books Donated',
        },
        {
            number: 350,
            label: 'Events',
        },
        {
            number: 1325,
            label: 'Lives Changed',
        },
    ]
    return (
        <div className="in-body col background-about">
            {red?<Redirect exact to = {path}/>:null}
           <div className="about-section">
                <div className="abt-sec abt-dark-ov">
                    <h1>Be a Part of</h1>
                    <h1><span className="green-home">Something </span>Great</h1>
                </div>
           </div>

           <div className="abt-sec abt-white">
               <div className="about-row-in">
                <h3 data-aos='fade-up'>On a mission to provide and aid</h3>
                <p data-aos='fade-up'>
                In 2012 HEED India started as Samarpan Charitable Trust engaging in a number of philanthropic activities with 
                the key philosophy of 'Responsible Living', i.e., responding to the immediate and essential needs of various 
                communities. With these efforts HEED India has reached out to schools, urban and rural communities, especially 
                students, women, SHG groups, elderly and disabled and others aiding them in areas of healthcare, education, 
                livelihood, and more.
                </p>
                <p data-aos='fade-up'>
                Through the years, HEED India programmes have matured and are moving to a more structured approach of community 
                development. Moving from a need based philanthropic approach to the right mix of need-based & project-based 
                approach, is what drives HEED India’s endeavours.
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

               <div className="dark-abt-cover" >
                    <div className="dac-1">
                        <h2>Raise<br/>Money</h2>
                   </div>
                   <div className="dac-2">
                   Find out how you can support our work through fundraising activities and events. Be a part of the movement.
                   </div>
               </div>

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
