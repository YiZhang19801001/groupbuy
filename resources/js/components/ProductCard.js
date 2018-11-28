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
                        <span>{this.props.product.product_name}</span>
                        <span>{this.props.product.product_price}</span>
                    </span>
                    <span className="text-information_description">
                        {this.props.product.product_description}
                    </span>
                    <ControlPannel
                        product_id={this.props.product.product_id}
                        product_sold={this.props.product.product_sold}
                        quantity={0}
                    />
                </div>
            </div>
        );
    }
}
