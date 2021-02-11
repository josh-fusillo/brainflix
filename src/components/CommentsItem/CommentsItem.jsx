import React from 'react';
import './CommentsItem.scss'

const CommentsItem = (props) => {

    let arrayDate = new Date(props.date);
    let properDate = arrayDate
        .getUTCMonth() + 1 + "/" +
        arrayDate.getUTCDate() + "/" +
        arrayDate.getUTCFullYear();

    return (
        <>
            <div className="commentsitem__wrapper">
                <div className="commentsitem__circle-image" />
                <div className="commentsitem__name-date-wrapper">
                    <div className="commentsitem__name">{props.name}</div>
                    <h4 className="commentsitem__date">{properDate}</h4>
                </div>

                </div>
                <div className="commentsitem__text-wrapper">
                    <p className="commentsitem__commentitem">{props.commentitem}</p>
                </div>

               
                
                
        </>
    )
}





export default CommentsItem