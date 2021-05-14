/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from 'react'
import url from '../../../url'
import axios from 'axios'

const Support = () => {
    const [initiatives,setInitiatives] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.get(url+'/supports/supportdata')
        .then((res)=>{
            // console.log(res.data);
            setInitiatives(res.data);setLoading(false)
        })
        .catch(e=>{
         console.log(e)
        })
     }, [initiatives])

    return (
        <div className="in-body padding-t-12 arrange-center-blogs">
            <h1>Supporters for Initiatives</h1>
            <div className='row-tb-2'>
                <p>User's Name</p>
                <p className='hide-tile'>Email Address</p>
                <p>Initiative</p>
                <p>Number</p>
                <p className='hide-tile'>Date</p>
            </div>
            {!loading?
            <>
            {
				initiatives.map((item)=>{
                    const timeStamp = parseInt(item._id.toString().substr(0,8), 16)*1000
                    const date = new Date(timeStamp)
				return <div className='row-tb'>
                    <p>{item.name}</p>
                    <p className='hide-tile'><a href={"mailto:" + item.email}>{item.email}</a></p>
                    <p>{item.option}</p>
                    <p>{item.number}</p>
                    <p className='hide-tile'>{date.toLocaleDateString()}</p>
                </div>
                })
			}
            </>:
            <h3>Loading ....</h3>}
        </div>
    )
}

export default Support
