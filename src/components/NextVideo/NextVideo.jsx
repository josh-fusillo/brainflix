import React from 'react';
import './NextVideo.scss';
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import { Link } from 'react-router-dom'

export default function NextVideo(props) {
  return (
    <div className="next">
      <h3 className="next__header">NEXT VIDEO</h3>

      {props.nextVideo.map((video) =>
        <Link to={`/${video.id}`} key={video.id} className="next__link" >
          <NextVideoItem  title={video.title} channel={video.channel} image={video.image} /></Link> 
      )
      }
         
      </div>


  )
}




