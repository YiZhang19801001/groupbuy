import React, { Component } from "react";

import ControlPannel from "./ControlPannel";

export default class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <div className="img-wrapper">
                    <img
                        src={this.props.product.img_url}
                        alt={this.props.product.product_name}
                    />
                </div>
                <div className="control">
                    <span className="text-information_title">
                        {this.props.product.product_name}
                    </span>

                    <ControlPannel
                        product_price={this.props.product.product_price}
                        quantity={0}
                    />
                </div>
            </div>
        );
    }
}
