import React, { Component } from "react";

import ControlPannel from "./ControlPannel";

export default class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: this.props.product,
            quantity: this.props.quantity || 0
        };
    }
    render() {
        return (
            <div className="product-card">
                <div className="img-wrapper">
                    <img
                        src={this.state.product.img_url}
                        alt={this.state.product.product_name}
                    />
                </div>
                <div className="control">
                    <span className="text-information_title">
                        <span>{this.state.product.product_name}</span>
                        <span>{this.state.product.product_price}</span>
                    </span>

                    <ControlPannel
                        product={this.state.product}
                        sold={this.state.product.product_sold}
                        updateShopCartList={this.props.updateShopCartList}
                        mode={1}
                        quantity={this.state.quantity}
                        shoppingCartList={this.props.shoppingCartList}
                    />
                </div>
            </div>
        );
    }
}
