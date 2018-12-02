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
                        src={`/groupbuy/public/${this.state.product.image}`}
                        alt={this.state.product.name}
                    />
                </div>
                <div className="control">
                    <span className="text-information_title">
                        <span>{this.state.product.name}</span>
                        <span>{this.state.product.price}</span>
                    </span>

                    <ControlPannel
                        product={this.state.product}
                        sold={this.state.product.sold}
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
