import React, { Component } from "react";
import NavigateControlPannel from "./NavigateControlPannel";
import QuantityControlPannel from "./QuantityControlPannel";

export default class ControlPannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sold: this.props.sold,
            quantity: this.props.quantity || 0,
            product: this.props.product,
            mode: this.props.mode
        };
    }

    render() {
        return (
            <div className="control-pannel">
                <span className="sold">SOLD: {this.state.sold}</span>
                {this.state.mode === 1 ? (
                    <QuantityControlPannel
                        product={this.state.product}
                        shoppingCartList={this.props.shoppingCartList}
                        updateShopCartList={this.props.updateShopCartList}
                        mode={1}
                        quantity={this.state.quantity}
                    />
                ) : (
                    <NavigateControlPannel
                        product_id={this.state.product.product_id}
                    />
                )}
            </div>
        );
    }
}
