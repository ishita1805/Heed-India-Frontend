/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState ,useEffect} from 'react'
import './blog.css'
import axios from 'axios';
import url from '../../url'
import ReactHtmlParser from 'react-html-parser';
import {NavLink} from 'react-router-dom'

const Blog = (props) => {
  const [liked,setLiked]=useState(false);
  const [blogData,setBlogData] = useState({});
      

  useEffect(() => {
    //FETCHING BLOG FROM DATABASE
    axios.get(`${url}/blogs/blog/${props.match.params.id}`)
      .then(res => {
        setBlogData(res.data);
        const arr = JSON.parse(localStorage.getItem('HI-Likes'))
        if(arr.find((el) => el._id ===res.data._id)) {
          console.log('found')
          setLiked(true)
        }
      
      })
      .catch(() => {})
     
  }, [])



  const likeHandler = () => {
    
    if(!localStorage.getItem('HI-Likes')) {
      let arr = []
      arr.push({ _id: blogData._id})
      console.log('added 1')
      localStorage.setItem('HI-Likes', JSON.stringify(arr));
      setLiked(true);
    }
    else if(!JSON.parse(localStorage.getItem('HI-Likes')).find((el) => el._id === blogData._id)) {
      let arr = JSON.parse(localStorage.getItem('HI-Likes'))
      arr.push({ _id: blogData._id});
      localStorage.setItem('HI-Likes', JSON.stringify(arr));
      console.log('added 2')
      setLiked(true);
    }
    else { 
      const newArr = JSON.parse(localStorage.getItem('HI-Likes')).filter((el) => el._id !== blogData._id)
      localStorage.setItem('HI-Likes',JSON.stringify(newArr));
      setLiked(false);
      console.log(newArr)
    }

  } 
  
  //DATE TO STRING
  const date = String(blogData.date);

  return (
    <>
    <div className='blog-topnav'>
      <NavLink exact to="/" target="__blank">
        <span className='big-blog-label'>HEED India | Sports and Education</span>
        <span className='small-blog-label'>HEED India</span>
      </NavLink>
      <div className='row'>
        <NavLink exact to="/" target="__blank"><span>Home</span></NavLink>
        &emsp; &emsp;
        <NavLink exact to="/events" target="__blank"><span>More Blogs</span></NavLink>
      </div>
    </div>
    <div className="blog">
     
      <h1>{blogData.heading}</h1>
      <h3>{blogData.subheading}</h3>

      <div className="details-blog-container">
        <div className="details-blog">
          <p className="blog-meta">Author: {blogData.author}</p>
          <p className="blog-meta">Date: {date.substring(0,10)}</p>
        </div>
        <div className="blog-social">
          {liked ? <i class="fa fa-heart icon-filled-blog" aria-hidden="true" onClick={likeHandler}></i> : <i class="fa fa-heart-o icon-blog" aria-hidden="true" onClick={likeHandler}></i>}
          <a target = "__blank" href = {blogData.instalink}><i className ="fa fa-instagram icon-blog" aria-hidden ="true" ></i></a>
        </div>
      </div>

      <div className="thumbnail-blog">
        <img src={blogData.banner} alt='banner'/>
      </div>

      <div className="blog-content">
      {ReactHtmlParser(blogData.content)}
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
          <a href="/">Privacy Policy</a> &emsp; <a href="/">Refund & Cancellations</a> &emsp; <a href="/">Terms & Conditions</a>
        </div>
      </div>

    </div>
    </>
  )
}

export default Blog

   
