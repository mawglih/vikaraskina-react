import React, { Component } from 'react';
import ShopItem from './shop-item';
import { ShopData } from '../constants/shop-data';

class Shop extends Component {

    renderItem() {
        return ShopData.map((item, index) => {
            return <ShopItem key={index} text={item.text} heading={item.heading} image={item.image} icon1={item.icon1} icon2={item.icon2} price={item.price} button={item.button}/>
        })
    }

    render() {
    return(
        <div className="shop__internal">
            {this.renderItem()}
        </div>
    )
}
}
export default Shop;