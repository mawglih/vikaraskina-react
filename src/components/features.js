import React, { Component } from 'react';
import { FeatureData } from '../constants/feature-data';
import FeatureItem from './feature-item';

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