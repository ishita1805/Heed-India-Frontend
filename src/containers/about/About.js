import React, {useEffect} from 'react'
import './about.css'

const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1 className = "about-heading">About Us</h1>
            <p className = "about-text">In 2012 HEED India started as Samarpan Charitable Trust engaging in a number of philanthropic<br />activities with the key philosophy of 'Responsible Living', i.e., responding to the immediate and<br />essential needs of various communities. With these efforts HEED India has reached out to schools,<br />urban and rural communities, especially students, women, SHG groups, elderly and disabled and<br />others aiding them in areas of healthcare, education, livelihood and so on.<br /><br />
Through the years, HEED India programmes have matured and are moving to a more structured<br />approach of community development.<br /><br />
Moving from NEED BASED PHILANTHROPIC APPROACH TO the right mix of NEED based & PROJECT<br />BASED APPROACH.<br /><br /></p>
            {props.state}
        </div>
    )
}

export default About
