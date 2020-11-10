import React, {useEffect} from 'react'

const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1>About Us</h1>
            {props.state}
        </div>
    )
}

export default About
