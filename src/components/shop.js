import React, { Component } from 'react';
import { ShopData } from '../constants/shop-data';
import { HeadingData } from '../constants/headings-data';

const ShopItem = (props) =>
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

class Shop extends Component {

    renderItem() {
        return ShopData.map((item, index) => {
            return <ShopItem key={index} text={item.text} heading={item.heading} image={item.image} icon1={item.icon1} icon2={item.icon2} price={item.price} button={item.button}/>
        })
    }

    render() {
    return(
        <div className="shop__internal">
        <h2 className="heading-2 shop__internal-heading">{HeadingData[1].heading2}</h2>
            {this.renderItem()}
        </div>
    )
}
}
export default Shop;