import React, {useEffect} from 'react'
import Paragraph from './Paragraph.js'

const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <Paragraph text = "In 2012 HEED India started as Samarpan Charitable Trust engaging in a number of philanthropic activities with the key philosophy of 'Responsible Living', i.e., responding to the immediate and essential needs of various communities. With these efforts HEED India has reached out to schools, urban and rural communities, especially students, women, SHG groups, elderly and disabled and others aiding them in areas of healthcare, education, livelihood and so on." />
            <Paragraph text = "Through the years, HEED India programmes have matured and are moving to a more structured approach of community development." />
            <Paragraph text = "Moving from NEED BASED PHILANTHROPIC APPROACH TO the right mix of NEED based & PROJECT BASED APPROACH."/>
            {props.state}
        </div>
    )
}

export default About
