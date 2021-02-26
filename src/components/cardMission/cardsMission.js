import React,{ useEffect } from 'react'
import './cardmission.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards({heading,para,img,color,...props}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
          });
    }, [])
    return (
        <div data-aos='fade-up' className="mission-card">
            {/* <a href="/"> */}
                <span id="circleIcons" className={color}>
                    <img src={img} alt="icon" className="iconimage"/>
                </span>
            {/* </a> */}
            <h3>{heading}</h3>
            <div className={`icon-mission-line ${color}`}></div>
            <p> 
                {para}
            </p>
        </div>
    )
}

export default Cards
