import React from 'react'
import './galleryMedia.css'
import {NavLink as Link} from 'react-router-dom'

export default function Posts() {
    return (
		<div className="gallery">
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>
				<Link to="/blog"><img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/></Link>				
		</div>
    )
}
