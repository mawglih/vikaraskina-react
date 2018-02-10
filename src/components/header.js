import React, { Component } from 'react';
import { HeaderData } from '../constants/header-data';

class Header extends Component {
    renderData() {
        return HeaderData.map((item, index) => {
            return <div className="header__inside" key={index}>
                        <img  src={item.logo} alt="" className="header__inside-logo"/>
                        <h3 className="heading-3 header__inside-h3">{item.heading1}</h3>
                        <h1 className="heading-1 header__inside-h1">{item.heading2}</h1>
                        <div className="header__inside-btn">
                        <button className="btn">{item.button}</button>
                        </div>
                        
                    </div>
        })
    }
    render() {
        return(
            <div className="header-item">
                {this.renderData()}
            </div>
        )
    }
}
    
export default Header;