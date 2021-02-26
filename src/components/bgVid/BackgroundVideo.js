import React, {useEffect} from 'react'
import '../../containers/mission/mission.css'
import vid from '../../assets/1.5mb.mp4'

const BackgroundVideo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
            <div className="ini-main">
                <video autoPlay muted loop id="myVideo">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="container-ini">
                    <h1>Our Mission</h1>
                    <div className="mission-underline"></div>
                    <p>One medium sized line about their <span className="green-home">mission</span> comes here </p>
                    <p className = "mission-hashtags"><span className = "mission-hash-1">#Fit</span><span className = "mission-hash-2">India</span> <span className = "mission-hash-1">#United</span><span className = "mission-hash-2">India</span></p>
                </div>
            </div>
    )
}

export default BackgroundVideo
