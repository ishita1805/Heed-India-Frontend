import React,{useState,useEffect} from 'react'
import './galleryMedia.css'
import {NavLink as Link} from 'react-router-dom'
import axios from 'axios'
import url from '../../url'
// import placeholder from '../../assets/placeholder.jpg'


const ImageLink = props =>{

	return(
		// <Link to={"/blog/"+props.img._id} >
		// 	<img src={props.img.thumbnail} className='gallery-image' alt=''/>
		// </Link>
		<Link to={"/blog/"+props.img._id} >
			<div className='event-card'>
				<div className='gallery-image'>
					<img src={props.img.thumbnail} alt=''/>
				</div>
				<div className='arrow-event-card'>
					<i className='fa fa-chevron-right'></i>
				</div>
				<div className='text-event-card'>
					<h3>{props.img.title}</h3>
					<p>{props.img.subtitle.substring(0,34)} ...</p>
				</div>
			</div>
		</Link>
	)
}

export default function Posts() {
	
	const [image, setimage] = useState([]);
	// const arrTemp = [1,2,3,4,5];

	useEffect(() => {
		axios.get(url+'/blogs/getblog')
		  .then(response => {
			setimage(response.data);
		  })
		  .catch((error) => {
			// console.log(error);
		  })
	  },[])

	if (image.length === 0) return (
		<div className="gallery">
			<h3>Oops no events to show ... :(</h3>
		</div>
	)
    else return (
		<div className="gallery">
			
			{
				image.map((item)=>(
				<ImageLink img={item}/>
				))
			}			

		</div>
    )
}
