import React from 'react';
import TestimonialPics from './testimonial-pics';
import TestimonialStory from './testimonial-story';

export default () => {
    return(
        <div>
            <div className="story__pictures">
                <TestimonialPics/>
            </div>
            
            <div className="story__content">
                <TestimonialStory />
            </div>
            
        </div>
    )
}