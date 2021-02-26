import React,{ useEffect } from 'react'
import './cardsports.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({img,heading,p1,p2,p3,set,...props}){
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
          });
    }, [])
    return(
        <div className={set===1?'sp-cont':'sp-cont-2'}>

             <div className='sp-card-text'>
                <h2 data-aos='fade-up'>{heading}</h2>
                <p data-aos='fade-up'>{p1}</p>
                <p data-aos='fade-up'>{p2}</p>
                <p data-aos='fade-up'>{p3}</p>
            </div>

            <div className='sp-card-img'>
                <img src={img} alt={heading}/>
            </div>
      </div>
    )
}

export default Card