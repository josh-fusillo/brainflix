import React from "react";
import './VideoPlayer.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';



const videoPlayer = (props) => {
    return (
        <section className="video">
            <video poster={props.poster} className="video__player">Your browser does not support the video tag.</video>
            <div className="video__overlay">
                <img src={play} className="video__play-button" alt="Play button" />
                <div className="video__scrubber-wrapper"><hr className="video__scrubber" /><div className="video__scrubber-time">0:00 / {props.time} </div></div>
                <img src={fullscreen} className="video__fullscreen-button" alt="Fullscreen button" />
                <img src={volume} className="video__volume-button" alt="Volume button" />
            </div>

            
        </section>
    )
}

export default videoPlayer