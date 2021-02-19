import React, {useEffect} from 'react'
import '../../containers/sports/sports.css'
import vid from '../../assets/SportsBGVid.mp4'

const SportsBackgroundVid = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className = "sports-vid-main">
            <video autoPlay muted loop id = "SpVid">
                <source src = {vid} type = "video/mp4"/>
            </video>
            <div className = "sports-container">
                <h1>Sports<span className = "sp-header"> For </span>Every Child</h1>
                <p className = "sp-line">________</p>
                <p className = "sp-subtitle">Support Heed India as it helps the youth excel in sports</p>
                <p className = "sports-hashtag"><span className = "hash-1">#be</span><span className = "hash-2">the</span><span className = "hash-3">change</span></p>
            </div>
        </div>
    )
}

export default SportsBackgroundVid