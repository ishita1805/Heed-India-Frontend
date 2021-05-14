import React, {useState,useEffect} from 'react'
import Profile from '../../components/profile/Profile'
import Post from '../../components/post/Posts'
import './ourWork.css'
import axios from 'axios'
import url from '../../url'


const Work = () => {
  const [content,setContent] = useState({
    title:'',
    subtitle:'',
    media:'',
});

    useEffect(() => {
       window.scrollTo(0, 0)
       axios.post(`${url}/page/get`, { id: '609c2be2a0996a0bec3f4a47' })
       .then((resp) => { 
           console.log(resp.data.resp);
           setContent(resp.data.resp);
        })
       .catch((e) => { console.log(e); })
      }, [])
      return(
        <div className="container-work">
                  <Profile 
                  image={content.media}
                  title={content.title}
                  subtitle={content.subtitle}/>
                  <Post/>
        </div>
      
      )
}

export default Work

