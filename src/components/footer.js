import React, { Component } from 'react';
import { NavData } from '../constants/nav-data';

class Footer extends Component {

    renderNav() {
        return NavData.map((item, index) => {
            return <li key={index} className="nav__item"><a href={item.link} className="nav__link">{item.name}</a></li>
        })
    }

    render() {
    return(
        <div className="footer__internal">
            <ul className="nav">
                {this.renderNav()}
            </ul>
            <p className="copyright">
                &copy; 2018 Vikarskina Inc.
            </p>
        </div>
    )
}
}
export default Footer;