import React from 'react'
// import classes from './BackgroundVideo.module.css';
import sample from '../../assets/1.5mb.mp4'

const BackgroundVideo = (props) => {
    return (
        <div id={props.id}>
            <video autoPlay loop muted >
                <source src={sample} type="video/mp4" />
            </video>
        </div>
    )
}

export default BackgroundVideo
