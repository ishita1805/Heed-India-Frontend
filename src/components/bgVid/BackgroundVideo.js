import React, {useEffect} from 'react'
import '../../containers/mission/mission.css'
import vid from '../../assets/1.5mb.mp4'

const BackgroundVideo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
            <div className="sports-vid-main">
                <video autoPlay muted loop id="myVideo">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="container-ini">
                    <h1 className='mission-heading-txt'>Our Mission</h1>
                    <div className="mission-underline"></div>
                    
                    <p className='mission-2liner'>Sports is <span className="green-home">‘The Biggest Unifier’</span> in India, where region, religion, language and caste divide the people. Join us as we promote sports for</p>
                    <p className = "mission-hashtags"><span className = "mission-hash-1">#FitIndia</span><span className = "mission-hash-2">#UnitedIndia</span></p>
                </div>
            </div>
    )
}

export default BackgroundVideo
