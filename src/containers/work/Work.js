import React, {useEffect} from 'react'
import Header from '../../components/header/Header'
import Profile from '../../components/profile/Profile'
import Post from '../../components/post/Posts'
import './ourWork.css'


const Work = () => {
    useEffect(() => {
       window.scrollTo(0, 0)
      }, [])
      return(
        <div className="container-work">
                  <Profile/>
                  <Post/>
        </div>
      
      )
}

export default Work

