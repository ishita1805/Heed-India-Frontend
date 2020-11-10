import React, {useEffect} from 'react'
import Profle from './Profile'
import Post from './Posts'
import './ourWork.css'


const Work = () => {
    useEffect(() => {
       // window.scrollTo(0, 0)
      }, [])

      return(
        <div className="container">
            <div className="size">
                  <Profle/>
                  <Post/>
            </div>
    
        </div>
      
      )
}

export default Work

