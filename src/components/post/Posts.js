import React from 'react'
import './galleryMedia.css'
import {NavLink as Link} from 'react-router-dom'

const imageLink = [
	"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop",
	"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
	"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
	"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop",
	"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
	"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
]

export default function Posts() {
    return (
		<div className="gallery">
			{
				imageLink.map((item)=>(
					<Link to="/blog">
						<img src={item} className='gallery-image' alt=''/>
					</Link>

				))
			}
				
			
		</div>
    )
}
