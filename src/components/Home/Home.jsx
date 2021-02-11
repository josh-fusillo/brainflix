import React, { Component } from 'react';
import axios from 'axios';
import './Home.scss';
import CommentsPosted from '../CommentsPosted/CommentsPosted'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import CommentsInput from '../CommentsInput/CommentsInput'
import NextVideo from '../NextVideo/NextVideo';
import VideoDetails from '../VideoDetails/VideoDetails';


const apiKey ="fcdda4b1-8a54-4bbe-9edd-7df54c290151";
const apiURL ="https://project-2-api.herokuapp.com/videos/?api_key=";
const heroVideo ="https://project-2-api.herokuapp.com/videos/1af0jruup5gu/";
const dynamicLink = 'https://project-2-api.herokuapp.com/videos/';


export default class Home extends Component {
  state = {
    mainVideo: {
      comments: []
    },
    sideVideo: [],
  }

  
  getMainVideo = () => {
    axios
    .get(`${heroVideo}?api_key=${apiKey}`)
    .then(response => {
        this.setState({
        mainVideo: response.data,
      });     
    })
    .catch(error => console.log(error))     
  }

  getSideVideo = () => {
    axios
    .get(`${apiURL}${apiKey}`)
    .then(response => {
      
      this.setState({
        sideVideo: response.data,
      });
    })
    .catch(error => console.log(error))   
  }

  componentDidMount() {
    this.getMainVideo();
    this.getSideVideo();
    
  }

  componentDidUpdate() {      
    let dynamicID = this.props.match.params.id
    if (typeof this.props.match.params.id === "undefined") {
      dynamicID = "1af0jruup5gu"
    }       
    axios
    .get(`${dynamicLink}${dynamicID}?api_key=${apiKey}`)
    .then(response => {
      if (this.state.mainVideo.id !== response.data.id) {
        this.setState({
          mainVideo: response.data,
        });
      }   
    })      
  }

  
  render() {
    return (
      <>
      
      <VideoPlayer 
        poster={this.state.mainVideo.image} 
        time={this.state.mainVideo.duration} 
        
         />  

      <section className="page">      
      <div className="hero"> 
      <VideoDetails
      title={this.state.mainVideo.title} 
      artist={this.state.mainVideo.channel} 
      date={this.state.mainVideo.timestamp}
      likes={this.state.mainVideo.likes}
      views={this.state.mainVideo.views}
      description={this.state.mainVideo.description} 
      />    
      <CommentsInput commentsTotal={this.state.mainVideo.comments.length}/> 
      
      <CommentsPosted commentsArray={this.state.mainVideo} /> 
      </div>      

      <div className="aside">
      <NextVideo nextVideo={this.state.sideVideo.filter(next => 
        next.id !== this.state.mainVideo.id)}/>
      </div>  

      </section>
      </>
    )
  }


}    
