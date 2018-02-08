import React from 'react';

export default (props) => {
    return(
        <div className="feature">
            <svg className="feature__icon">
                <use xlinkHref={props.icon}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">{props.heading}</h4>
            <p className="feature__text">{props.text}</p>
        </div>
    );
}