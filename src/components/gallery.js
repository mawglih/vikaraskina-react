import React, { Component } from 'react';
import { ImageData } from '../constants/image-data';
import { HeadingData } from '../constants/headings-data';

class Gallery extends Component {
    renderImage() {
        return ImageData.map((image, index) => {
            return  <figure  key={index} className={`gallery__inside-item gallery__inside-item--${index}`}>
                        <img className="gallery__inside-img" src={image.source} alt={image.name}/>
                        {/* <figcaption><h4>{image.name}</h4></figcaption> */}
                    </figure>
        })
    }
    render() {
        return(
            <div className="gallery__inside">
                <div className="gallery__inside-heading">
                    <h2 className="heading-2">{HeadingData[0].heading1}</h2>
                </div>
                {this.renderImage()}
            </div>
        )
    }

}
export default Gallery;