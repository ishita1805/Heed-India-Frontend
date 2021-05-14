/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import '../../containers/mission/mission.css'
import vid from '../../assets/1.5mb.mp4'
import Typewriter from 'typewriter-effect'
import missionAudio from '../../assets/mission.mp3'

const BackgroundVideo = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
            <div className="sports-vid-main">
                <video autoPlay muted loop id="myVideo">
                    <source src={vid} type="video/mp4"/>
                </video>
                <audio autoPlay loop className="audio-story">
                    <source src={missionAudio} type="audio/mpeg"/>  
                </audio>
                <div className="container-ini">
                    <h1 className='mission-heading-txt'>{props.title}</h1>
                    <div className="mission-underline"></div>
                    
                    <p className='mission-2liner sp-subtitle'>
                        {props.subtitle}
                    </p>
                    <h2 className="green-hashtag">
                        <Typewriter 
                            options={{
                                strings: props.hashtag,
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

export default BackgroundVideo
