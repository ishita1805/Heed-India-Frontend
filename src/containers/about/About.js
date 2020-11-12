import React, {useEffect} from 'react'
import Paragraph from '../../components/paragraph/Paragraph.js'
import Header from '../../components/header/Header'
import './about.css'
import Card from '../../components/card/Card'
const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body about-align">
             {/* {props.state} */}
             <div className="inner-about-col">
                <Header title = "About Us"/>
                <Paragraph text = "In 2012 HEED India started as Samarpan Charitable Trust engaging in a number of philanthropic activities with the key philosophy of 'Responsible Living', i.e., responding to the immediate and essential needs of various communities. With these efforts HEED India has reached out to schools, urban and rural communities, especially students, women, SHG groups, elderly and disabled and others aiding them in areas of healthcare, education, livelihood and so on." />
                <Paragraph text = "Through the years, HEED India programmes have matured and are moving to a more structured approach of community development." />
                <Paragraph className="hide-about-p" text = "Moving from NEED BASED PHILANTHROPIC APPROACH TO the right mix of NEED based & PROJECT BASED APPROACH."/>
            </div>
            <div className="inner-about-col-2">
                <div className="inner-about-cards" >
                    <Card className="primary-card"/>
                    <Card className="primary-card"/>
                </div>
            </div>
           
        </div>
    )
}

export default About
