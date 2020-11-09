import React, {useEffect} from 'react'
import Profle from './Profile'
import Post from './Posts'


const Work = () => {
    useEffect(() => {
       // window.scrollTo(0, 0)
      }, [])

      return(
        <div class="container">

              <Profle/>
              <Post/>
    
        </div>
      
      )
}

export default Work

