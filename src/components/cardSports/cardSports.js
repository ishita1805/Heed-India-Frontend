import React,{ useEffect } from 'react'
import './cardsports.css'
import AOS from 'aos';
import ReactHtmlParser from 'react-html-parser';
import 'aos/dist/aos.css';

function Card({img,heading,content,set,...props}){
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
          });
    }, [])
    return(
        <div className={set===1?'sp-cont':'sp-cont-2'}>

             <div data-aos='fade-up' className='sp-card-text'>
                <h2 >{heading}</h2>
                 {ReactHtmlParser(content)}
            </div>

            <div className='sp-card-img'>
                <img src={img} alt={heading}/>
            </div>
      </div>
    )
}

export default Card