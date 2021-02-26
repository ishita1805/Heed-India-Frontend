import React,{ useEffect, useState } from 'react'
import './contacts.css'
import url from '../../../url'
import axios from 'axios'


const Contacts = () => {
    const [contacts,setContacts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
       axios.get(url+'/contacts/getContacts')
       .then((res)=>{setContacts(res.data.data);setLoading(false)})
       .catch(e=>{
        // console.log(e)
       })
    }, [contacts])
    return (
        <div className="in-body padding-t-12 arrange-center-blogs">

            <h1>All Messages for Heed India</h1>
            <div className='row-tb-2'>
                    <p>User's Name</p>
                    <p className='hide-tile'>Email Address</p>
                    <p>Message</p>
                    <p>Number</p>
                    <p className='hide-tile'>Date</p>
            </div>
            {!loading?
            <>
            {
				contacts.map((item)=>{
                    const timeStamp = parseInt(item._id.toString().substr(0,8), 16)*1000
                    const date = new Date(timeStamp)
				return <div className='row-tb'>
                    <p>{item.name}</p>
                    <p className='hide-tile'><a href={"mailto:" + item.email}>{item.email}</a></p>
                    <p>{item.message}</p>
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

export default Contacts
