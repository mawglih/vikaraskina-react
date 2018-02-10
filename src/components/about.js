import React, { Component } from 'react';
import { HeadingData } from '../constants/headings-data';
import { AboutData } from '../constants/about-data';

const AboutItem = (props) =>
    <div className={`about__inside-list--${props.iterator}`}>
        <img src={props.image} alt={props.name} className="about__inside-img"/>
        <div className="about__inside-details">
            <h4 className="heading-4 heading-4-light">{props.name}</h4>
        </div>
    </div>

class About extends Component {

    renderItems() {
        return AboutData.map((item, index) => {
            return <AboutItem key={index} image={item.image} name={item.name} iterator={index}/>
        })
    }
    render() {
        return(
            <div >
                <h3 className="heading-3 about__inside-heading">{HeadingData[2].heading3}</h3>
                <div className="about__inside">
                <div className="about__inside-list">
                    {this.renderItems()}
                </div>
                </div>
                
            </div>
        )
    }
}
export default About;