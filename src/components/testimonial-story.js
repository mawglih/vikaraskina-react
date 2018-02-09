import React from 'react';
import { Story } from '../constants/story-data';

export default () => {
    return(
        <div className="story-content__internal">
            <h3 className="heading-3 mb-sm">{Story[0]}</h3>
            <h2 className="heading-2 heading-2--dark mb-md">&ldquo;{Story[1]}&rdquo;</h2>
            <p className="story-content__internal-text mb-lg">{Story[2]}</p>
            <button className="btn">{Story[3]}</button>
        </div>
    )
}