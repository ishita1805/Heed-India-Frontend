import React, { useState } from 'react'
import './blog.css'

const Blog = () => {
    const [liked,setLiked]=useState(true);
    const likeHandler = ()=>{
        setLiked(!liked);
    }

    return (
        <div className="blog padding-t-5"> 
            <h1>Importance of Health and Education for Children</h1>
            <h3>Importance of Health and Education for Children</h3>
            
            <div className="details-blog-container">
                <div className="details-blog">
                    <p className="blog-meta">Author: Ishita Kabra</p>
                    <p className="blog-meta">Date: 9th Nov 2020</p>
                </div>
                <div className="blog-social">
                   { !liked?<i class="fa fa-heart icon-filled-blog" aria-hidden="true" onClick={likeHandler}></i>:<i class="fa fa-heart-o icon-blog" aria-hidden="true" onClick={likeHandler}></i> }
                    <i class="fa fa-instagram icon-blog" aria-hidden="true"></i>
                </div>
            </div>

            <div className="thumbnail-blog"></div>

            <div className="blog-content">
            
            </div>

            <div className="blog-footer">
                <div className="row">
                    <i class="fa fa-facebook-official icon-blog" aria-hidden="true"></i>
                    <i class="fa fa-instagram icon-blog" aria-hidden="true"></i>
                    <i class="fa fa-twitter icon-blog" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square icon-blog" aria-hidden="true"></i>
                </div>
                <br></br>
                Copyright © 2020 Heed India<br></br>
                All Rights Reserved<br></br><br></br>
                <div className="row">
                    <a>Privacy Policy</a> &emsp; <a>Refund & Cancellations</a> &emsp; <a>Terms & Conditions</a>
                </div>
            </div>

        </div>
    )
}

export default Blog
