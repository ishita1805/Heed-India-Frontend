import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import './about.css'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios'
import url from '../../url'
import placeholder from '../../assets/missionimg.jpg'


const About = (props) => {
    const [red,setRed] = useState(false);
    const [path,setPath] = useState('');
    const [content,setContent] = useState(props.content);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${url}/page/get`, { id: '609c2b89a0996a0bec3f4a45' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
            window.scrollTo(0, 0);
         })
        .catch((e) => { console.log(e); })
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
          });
      }, [props.state])
      
    
    return (
        <div className="in-body col background-about">
            {red?<Redirect exact to = {path}/>:null}
           <div style={{
               backgroundImage:`url(${content.media})`
           }} className="about-section">
                <div className="abt-sec abt-dark-ov">
                    <h1>
                        <span className="green-home">
                            {content.title.substring(0,content.title.indexOf(' '))}
                        </span>
                            {` ${content.title.substring(content.title.indexOf(' ')+1)}`}  
                    </h1>
                   
                </div>
           </div>

           <div className="abt-sec abt-white">
               <div data-aos='fade-up' className="about-row-in">
                    {ReactHtmlParser(content.para)}
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
               {content.stats.map((item)=>(
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

               {
                   content.cards.map((item) => (
                    <div style={{
                        backgroundImage:`url(${item.media})`
                    }} 
                    className="dark-abt-cover" 
                    onClick={()=>{setRed(true);setPath('/donate')}} 
                    >
                        <div className="dac-1">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="dac-2">
                            {item.description}
                        </div>
                    </div>
                   ))
               }
           </div>

           <div className='ann-report'>
               <a href='https://drive.google.com/drive/folders/1k1xggbyHhht965YqZu0vTEpLKjXjrBiR?usp=sharing' target='__blank'>
                   View Our Annual Reports
                   &ensp;
                   <i className='fa fa-arrow-right'></i>
                </a>
           </div>

           <div className='dark-abt-2'>
              <h2>Our Well Wishers</h2>
              <div className='logo-grid'>
                  <img src={placeholder} alt='well-wishers'/>
                  <img src={placeholder} alt='well-wishers'/>
                  <img src={placeholder} alt='well-wishers'/>
                  <img src={placeholder} alt='well-wishers'/>
                  <img src={placeholder} alt='well-wishers'/>
                  <img src={placeholder} alt='well-wishers'/>
              </div>
           </div>
            
           
        </div>
    )
}

export default About
