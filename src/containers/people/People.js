import React,{ useState, useEffect } from 'react'
import './people.css'
import axios from 'axios'
import url from '../../url'
import AOS from 'aos';
import ReactHtmlParser from 'react-html-parser'

const People = () => {
    const [content,setContent] = useState({
        cards:[{
            title:'',
            description:'',
            media:'',
        }],
        title:'',
        media:'',
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        AOS.init({
            duration: 400,
            easing: 'ease-in-out-sine',
          });

        axios.post(`${url}/page/get`, { id: '60b271d93444a0ac2489cd89' })
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
                {
                    content.cards.map((item) => (
                        <div className='people-card'>
                            <img alt='user' src={item.media}/>
                            <div className='people-card-text'>
                                <h1>{item.title}</h1>
                                <div className='pct-span'></div>
                                {ReactHtmlParser(item.description)}
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default People
