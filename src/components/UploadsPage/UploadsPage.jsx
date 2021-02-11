import React from 'react'
import './UploadsPage.scss'
import videoPreview from '../../assets/Images/Upload-video-preview.jpg'

let noSubmit = (event) => {
    event.preventDefault();    
    event.target.reset();
  }

export default function UploadsPage() {
    return (
        <section className="uploads">
            <h1 className="uploads__header">Upload Video</h1>
            <form className="uploads__form" onSubmit={noSubmit}>
                <div className="uploads__wrapper">
                    <div className="uploads__thumbnail-sub-wrapper">
                        <h2 className="uploads__sub-header">VIDEO THUMBNAIL</h2>
                        <img className="uploads__image" src={videoPreview} alt="Preview" />
                    </div>
                    <div className="uploads__title-input-wrapper">
                        <label htmlFor="title"><h2 className="uploads__sub-header">TITLE YOUR VIDEO</h2></label>
                        <input type="text" placeholder="Add a title to your video" name="title" className="uploads__input" />
                        <label htmlFor="description"><h2 className="uploads__sub-header">ADD A VIDEO DESCRIPTION</h2></label>
                        <input name="description" className="uploads__description" placeholder="Add a description of your video"></input>
                    </div>
                </div>
                <div className="uploads__buttons-wrapper">
                    <button className="uploads__publish-button">PUBLISH</button>
                    <button className="uploads__cancel-button">CANCEL</button>
                </div>
            </form>
        </section>
    )
}
