import React, { Component } from "react";

export default class ShopCart extends Component {
    render() {
        return (
            <div className="shop-cart">
                <div className="left">
                    <i className="material-icons">shopping_cart</i>
                </div>
                <div className="right">{this.props.btn_text}</div>
            </div>
        );
    }
}
