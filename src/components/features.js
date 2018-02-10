import React, { Component } from 'react';
import { FeatureData } from '../constants/feature-data';

const FeatureItem = (props) =>
    <div className="feature">
        <svg className="feature__icon">
            <use xlinkHref={props.icon}></use>
        </svg>
        <h4 className="heading-4 heading-4--dark">{props.heading}</h4>
        <p className="feature__text">{props.text}</p>
    </div>

class Feature extends Component {

    renderItem() {
        return FeatureData.map((item, index) => {
            return <FeatureItem key={index} text={item.text} heading={item.heading} icon={item.icon}/>
        })
    }
    render() {
        return(
          <div className="features__inside">
              {this.renderItem()}
          </div>  
        );
    }
}
export default Feature;