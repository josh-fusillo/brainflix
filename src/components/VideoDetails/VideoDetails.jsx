import React from 'react'
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import './VideoDetails.scss';

export default function VideoDetails(props) {
    
    let arrayDate = new Date(props.date);
    let properDate = arrayDate
        .getUTCMonth() + 1 + "/" +
        arrayDate.getUTCDate() + "/" +
        arrayDate.getUTCFullYear();


    return (
        <div className="videodetails__wrapper">
                <h1 className="videodetails__header">{props.title}</h1>
                <div className="videodetails__section-wrapper">
                    <div className="videodetails__artist-date-wrapper">
                        <p className="videodetails__artist">{props.artist}</p>
                        <p className="videodetails__date">{properDate}</p>
                    </div>
                    <div className="videodetails__views-likes-wrapper">
                        <img src={views} alt="Views icon" className="videodetails__views-icon" />
                        <p className="videodetails__views-counter">{props.views}</p>
                        <img src={likes} alt="Likes icon" className="videodetails__likes-icon" />
                        <p className="videodetails__likes-counter">{props.likes}</p>
                    </div>
                </div>
                <div className="videodetails__text-wrapper">
                    <p className="videodetails__text">{props.description}</p>
                </div>
            </div>
    )
}

