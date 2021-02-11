import React from 'react';
import CommentsItem from '../CommentsItem/CommentsItem';
import './CommentsPosted.scss';



export default function CommentsPosted(props) {
    
    return (
      <div className="comments__posted">
         {props.commentsArray.comments.map(comment => <CommentsItem key={comment.id} name={comment.name} date={comment.timestamp} commentitem={comment.comment}/>)}
      </div>
    )
  }








