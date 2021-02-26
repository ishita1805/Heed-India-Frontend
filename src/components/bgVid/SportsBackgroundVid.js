import React, {useEffect} from 'react'
import '../../containers/sports/sports.css'
import vid from '../../assets/SportsBGVid.mp4'
import Typewriter from 'typewriter-effect'
import missionAudio from '../../assets/mission.mp3'

const SportsBackgroundVid = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className = "sports-vid-main">
            <video autoPlay muted loop id = "SpVid">
                <source src = {vid} type = "video/mp4"/>
            </video>
            {/* <audio autoPlay loop className="audio-story">
                <source src={missionAudio} type="audio/mpeg"/>  
            </audio> */}
            <div className = "sports-container">
                <h1>Sports For Every Child</h1>
                <div className="mission-underline"></div>
                <p className = "sp-subtitle">Support Heed India as it helps the youth excel in sports</p>
                <h2 className="green-hashtag">
                    <Typewriter 
                        options={{
                            strings: ['#SportsForEveryone'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 50
                        }}
                    />
                </h2>
            </div>
        </div>
    )
}

export default SportsBackgroundVid