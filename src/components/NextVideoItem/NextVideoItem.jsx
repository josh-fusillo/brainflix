import './NextVideoItem.scss';
import React, { Component } from 'react'

export default class NextVideoItem extends Component {
  render() {
    const {image, title, channel} = this.props
    return (
      <section className="nextvideo__section">
        <div className="nextvideo__wrapper">
          <img className="nextvideo__image" src={image} alt={title} />
          <div className="nextvideo__text-wrapper">
            <h4 className="nextvideo__title">{title}</h4>
            <p className="nextvideo__author">{channel}</p>
          </div>
        </div>
      </section>
    )

  }
}




