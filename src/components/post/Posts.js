import React,{useState,useEffect} from 'react'
import './galleryMedia.css'
import delIcon from '../../assets/icon_del.png'
import chevronIcon from '../../assets/icon_chevron.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import url from '../../url'


const ImageLink = props =>{
	const deleteHandler = (id) => {
		axios.post(url+'/blogs/delblog', { id })
		  .then(response => {
			console.log(response.data);
		  })
		  .catch((error) => {
			console.log(error);
		  })
	}
	return(
		
			<div className='event-card'>
				{props.edit?<i className='del-icon-event' onClick={()=>deleteHandler(props.img._id)}><img alt='icon' src={delIcon}/></i>:null}
				<div className='gallery-image'>
					<img src={props.img.thumbnail} alt=''/>
				</div>
				<div className='arrow-event-card'>
				<Link to={"/blog/"+props.img._id} target="__blank" >
					<i><img alt='icon' src={chevronIcon}/></i>
				</Link>
				</div>
				<div className='text-event-card'>
					<h3>{props.img.heading}</h3>
					<p className='event-text-toggle-1'>{props.img.subheading.substring(0,34)} {props.img.subheading.length>34?'...':null}</p>
					<p className='event-text-toggle-2'>{props.img.subheading.substring(0,200)} {props.img.subheading.length>200?'...':null}</p>
				</div>
			</div>
		
	)
}

export default function Posts(props) {
	
	const [image, setimage] = useState([]);

	useEffect(() => {
		axios.get(url+'/blogs/getblog')
		  .then(response => {
			console.log(response.data);
			setimage(response.data);
		  })
		  .catch((error) => {
			console.log(error);
		  })
	  },[])

	if (image.length === 0) return (
		<div className={props.color?"gallery-white":"gallery"}>
			<h3>Loading ...</h3>
		</div>
	)
    else return (
		<div className={props.color?"gallery-white":"gallery"}>
			
			{
				image.map((item)=>(
				<ImageLink edit={props.mode} img={item}/>
				))
			}			

		</div>
    )

}
