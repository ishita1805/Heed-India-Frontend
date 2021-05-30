import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import './banner.css'

const Banner = () => {
    const [data,setData] = useState('')
    const [close,setClose] = useState(false);

    useEffect(() => {
       axios.get(`${url}/page/getAlert`)
       .then((resp) => {
        setData(resp.data.resp.text);
       })
       .catch((e) => {
           console.log(e);
       })
    }, [])

    if(!close) return (
        <>
        {data!==''?
        <div className='banner'>  
            <div className='banner-container'>
                <div className='banner-text'>
                   <h1>HEED India <span className='green-home'>Updates</span></h1>
                   <p>
                        {data}
                   </p>
                </div>
                <i className='fa fa-times' onClick={()=>setClose(true)}></i>
            </div> 
        </div>
    :null}
    </>
    )
    else return null
}

export default Banner
