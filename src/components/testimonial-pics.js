import React from 'react';
import img1 from '../images/image_ras1.png';
import img2 from '../images/image_ras2.png';
import img3 from '../images/image_ras3.png';
import img4 from '../images/image_ras4.png';

export default () => {
    return(
        <div className="story-pictures__internal">
            <img src={img1} alt="rassylka" className="story-pictures__internal--img1"/>
            <img src={img2} alt="rassylka" className="story-pictures__internal--img2"/>
            <img src={img3} alt="rassylka" className="story-pictures__internal--img3"/>
            <img src={img4} alt="rassylka" className="story-pictures__internal--img4"/>
        </div>
    )
}