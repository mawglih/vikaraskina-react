import React from 'react';

export default (props) => {
    return(
        <div className="shop-item">
            <img src={props.image} alt={props.heading} className="shop-item__img"/>
            <h5 className="shop-item__name">{props.heading}</h5>
            <div className="shop-item__description">
                <svg>
                    <use xlinkHref={props.icon1}></use>
                </svg>
                <p className="shop-item__description-text">{props.text}</p>
                
            </div>
            <div className="shop-item__price">
                <svg>
                    <use xlinkHref={props.icon2}></use>
                </svg>
                <p className="shop-item__price-text">{props.price}</p>
                
            </div>
            <button className="btn shop-item__btn">{props.button}</button>
        </div>
    );
}