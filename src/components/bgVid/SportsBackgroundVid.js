/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import '../../containers/sports/sports.css'
import Typewriter from 'typewriter-effect'
import sport from '../../assets/sport.mp3'

const SportsBackgroundVid = (props) => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className = "sports-vid-main">
            <video autoPlay muted loop id = "SpVid">
                <source src ='https://res.cloudinary.com/dtmhqs3e0/video/upload/v1621233630/SportsBGVid_vx3zy0.mp4' type = "video/mp4"/>
            </video>
            <audio autoPlay loop className="audio-story">
                <source src={sport} type="audio/mpeg"/>  
            </audio>
            <div className = "sports-container">
                <h1>{props.title}</h1>
                <div className="mission-underline"></div>
                <p className = "sp-subtitle">
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

export default SportsBackgroundVid