import React, {useEffect, useState} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'
import './home.css'
import Button from '../../components/button/Button'
import { Redirect } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import axios from 'axios'
import url from '../../url'


const Home = ({state,...props}) => {
    const [red,setRed] = useState(false);
    const [content,setContent] = useState({
        title:'HEED India',
        subtitle:'Facilitating health and education for children across the globe',
        media:localStorage.getItem('heed-india-media'),
        hashtag:''
    });
    useEffect(() => {
        axios.post(`${url}/page/get`, { id: '609c2a8b05752e403ccd44ef' })
        .then((resp) => { 
            console.log(resp.data.resp);
            localStorage.setItem('heed-india-media',resp.data.resp.media);
            setContent(resp.data.resp);
            props.loaded(true);
            window.scrollTo(0, 0);
         })
        .catch((e) => { console.log(e); })
    }, [])



  return (
    <div style={{
        backgroundImage:`url(${content.media})`,
    }} className="col in-body-2">
        {red?<Redirect to="/donate" exact />:null}
        <div className="grow">
          
            <h1>
                <span className="green-home">
                    {content.title.substring(0,content.title.indexOf(' '))}
                </span>
                 {` ${content.title.substring(content.title.indexOf(' ')+1)}`}   
            </h1>
            <p className='sp-left'>{content.subtitle}</p>
            <h2 className="green-home">
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
            label="Donate"
            onClick={()=>setRed(true)}/>
            <div className="bottom-nav-home">
                <BottomNav/>
            </div> 
        </div>
           
    </div>
    )
}

export default Home
