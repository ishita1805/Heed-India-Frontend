import React, {useEffect} from 'react'
import Profile from '../../components/profile/Profile'
import Post from '../../components/post/Posts'
import './ourWork.css'


const Work = () => {
    useEffect(() => {
       // window.scrollTo(0, 0)
      }, [])

      return(
        <div className="container">
            <div className="size">
                  <Profile/>
                  <Post/>
            </div>
    
        </div>
      
      )
}

export default Work

