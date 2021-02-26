/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState ,useEffect} from 'react'
import './blog.css'
import axios from 'axios';
import url from '../../url'
import ReactHtmlParser from 'react-html-parser';

const Blog = (props) => {
  const [liked,setLiked]=useState(false);
  const [blogData,setBlogData] = useState({});
      

  useEffect(() => {
//FETCHING BLOG FROM DATA_BASE
    axios.get(`${url}/blogs/blog/${props.match.params.id}`)
      .then(res => {
        console.log(res.data.banner);
        setBlogData(res.data)
        // console.log(res.data)
      })
      .catch((error) => {
      // console.log('error');
      })
  }, [])

  const likeHandler = () => {
    setLiked(!liked);
    axios.post(url+'/blogs/likeStatus', {
      blogId:props.match.params.id
    })
    .then((res) => console.log(res))
    .catch(e=>console.log(e))
   
  } 
  
  //DATE TO STRING
  const date = String(blogData.date);

  return (
    <div className="blog padding-t-5">
      <h1>{blogData.heading}</h1>
      <h3>{blogData.subheading}</h3>

      <div className="details-blog-container">
        <div className="details-blog">
          <p className="blog-meta">Author: {blogData.author}</p>
          <p className="blog-meta">Date: {date.substring(0,10)}</p>
        </div>
        <div className="blog-social">
          {liked ? <i class="fa fa-heart icon-filled-blog" aria-hidden="true" onClick={likeHandler}></i> : <i class="fa fa-heart-o icon-blog" aria-hidden="true" onClick={likeHandler}></i>}
          <i target = "__blank" href = {blogData.instalink} className = "fa fa-instagram icon-blog" aria-hidden = "true" ></i>
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
  )
}

export default Blog

   
