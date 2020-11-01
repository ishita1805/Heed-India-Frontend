import React, {useEffect} from 'react'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1>About Us</h1>
        </div>
    )
}

export default About
