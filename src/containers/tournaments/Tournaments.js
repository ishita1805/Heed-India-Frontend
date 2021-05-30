import React,{ useState, useEffect } from 'react'
import './tournaments.css'
import axios from 'axios'
import url from '../../url'
import AOS from 'aos';
import ReactHtmlParser from 'react-html-parser'


const Tournaments = () => {
    const [content,setContent] = useState({
        title:'',
        media:'',
        description:''
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        AOS.init({
            duration: 400,
            easing: 'ease-in-out-sine',
          });

        axios.post(`${url}/page/get`, { id: '60b33ebf71eae12e80e12768' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
            
         })
        .catch((e) => { console.log(e); })
      }, [])

    return (
        <div className='people-behind'>
            <div style={{ backgroundImage:`url("${content.media}")`}} className='people-img'>
                <div className='people-cont'>
                    <h1>
                        <span className="green-home">
                        {content.title.substring(0,content.title.indexOf(' '))}
                        </span>
                        {` ${content.title.substring(content.title.indexOf(' ')+1)}`}
                    </h1>
                </div>
            </div>

            <div className='people-data'>
                    {ReactHtmlParser(content.para)}
                    <br/>
                    <a href='https://drive.google.com/file/d/1NXz4IAPSy22dKrrTomZrSO-1PV0yJAx0/view?usp=sharing' target='__blank'>
                        Tournaments
                        &ensp;
                        <i className='fa fa-arrow-right'></i>
                    </a>
            </div>
            
        </div>
    )
}

export default Tournaments
