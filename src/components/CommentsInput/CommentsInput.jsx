import React from 'react'
import './CommentsInput.scss';
import image from '../../assets/Images/Mohan-muruge.jpg';

let noSubmit = (event) => {
    event.preventDefault();    
    event.target.reset();
  }

export default function CommentsInput(props) {
    return (
        <section className="comments">
        <p className="comments__counter">{props.commentsTotal} Comments</p>
        <p className="comments__label-join" >JOIN THE CONVERSATION</p>
        <div className="comments__wrapper">
            <img className="comments__circle-image" src={image} alt="Pic of Mohan" />
            <div className="comments__form-wrapper">
                <form action="submit" onSubmit={noSubmit} className="comments__form" tabIndex="1">
                    <input type="text" className="comments__label-style-comments" name="comment"
                        placeholder="Write comment here" />
                    <button className="comments__button" type="submit">COMMENT</button>
                </form>
            </div>
        </div>               

    </section>
    )
}
