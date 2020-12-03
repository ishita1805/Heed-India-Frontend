import React, {useEffect} from 'react'
import Paragraph from '../../components/paragraph/Paragraph.js'
import Header from '../../components/header/Header'
import './about.css'
import Card from '../../components/card/Card'

const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
          {/* {props.state} */}
      }, [])
      
    return (
        <div className="in-body col background-about">

           <div className="about-section">
                <div className="abt-sec abt-dark-ov">
                    <h1>Be a Part of</h1>
                    <h1><span className="green-home">Something </span>Great</h1>
                </div>
           </div>

           <div className="abt-sec abt-white">
               <div className="about-row-in">
                <h3>On a mission to provide and aid</h3>
                <p>
                In 2012 HEED India started as Samarpan Charitable Trust engaging in a number of 
                philanthropic activities with the key philosophy of 'Responsible Living', i.e., 
                responding to the immediate and essential needs of various communities. With these 
                efforts HEED India has reached out to schools, urban and rural communities, especially 
                students, women, SHG groups, elderly and disabled and others aiding them in areas of healthcare, 
                education, livelihood and so on.
                </p>
                <p>
                Through the years, HEED India programmes have matured and are moving to a more structured approach 
                of community development.
                </p>
                <p>
                Moving from NEED BASED PHILANTHROPIC APPROACH TO the right mix of NEED based & PROJECT BASED APPROACH.
                </p>
               </div>
               <div className="about-row-in">
                    <iframe
                    className="iframe-abt"
                    src="https://www.youtube.com/embed/UclKT_bQMFo" 
                    frameborder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
               </div>
           </div>


           <div className="abt-semi">
               <div className="abt-semi-in">
                   2525<h3>Books Donated</h3>
               </div>
               <div className="abt-semi-in">
                   325<h3>Events</h3>
               </div>
               <div className="abt-semi-in">
                   1325<h3>Lives Changed</h3>
               </div>
           </div>


           <div className="dark-abt">
               <div className="dark-abt-cover">
                  <h3>Donate<br/>For<br/>A Cause</h3>
               </div>
               <div className="dark-abt-cover">
               <h3>Raise<br/>Money</h3>
               </div>
               <div className="dark-abt-cover">
               <h3>Give<br/> little of<br/> YOU!</h3>
               </div>
               <div className="dark-abt-cover">
               <h3>Our<br/>Mission</h3>
               </div>

           </div>
            
           
        </div>
    )
}

export default About
