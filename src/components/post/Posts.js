import React,{useState,useEffect} from 'react'
import './galleryMedia.css'
import {NavLink as Link} from 'react-router-dom'
import axios from 'axios'
import url from '../../url'


const ImageLink = props =>{

	return(
		<Link to={"/blog/"+props.img._id} >
			<img src={props.img.thumbnail} className='gallery-image' alt=''/>
		</Link>
	)
}

export default function Posts() {
	
	const [image, setimage] = useState([]);

	useEffect(() => {
		axios.get(url+'/blogs/getblog')
		  .then(response => {
			setimage(response.data);
			// console.log(response.data);
		  })
		  .catch((error) => {
			// console.log(error);
		  })
	  },[])

	
    return (
		<div className="gallery">
			
			{
				image.map((currentimage)=>(
				<ImageLink img={currentimage}/>
				))
			}			

		</div>
    )
}
