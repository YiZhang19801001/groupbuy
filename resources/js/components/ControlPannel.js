import React, { Component } from "react";
import NavigateControlPannel from "./NavigateControlPannel";
import QuantityControlPannel from "./QuantityControlPannel";

export default class ControlPannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sold: this.props.sold,
            quantity: this.props.quantity,
            product: this.props.product,
            mode: this.props.mode
        };
    }
    componentDidMount() {
        this.state = {
            sold: this.props.sold,
            quantity: this.props.quantity,
            product: this.props.product,
            mode: this.props.mode
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState = { mode: newProps.mode, quantity: newProps.quantity };
        // console.log(`${this.state.product.name}`, this.state.mode);
    }
    render() {
        //console.log(`${this.state.product.name}`, this.state.mode);
        return (
            <div className="control-pannel">
                <span className="sold">SOLD: {this.state.sold}</span>
                {this.state.mode === 1 ? (
                    <QuantityControlPannel
                        product={this.state.product}
                        shoppingCartList={this.props.shoppingCartList}
                        updateShopCartList={this.props.updateShopCartList}
                        mode={1}
                        quantity={this.props.quantity}
                    />
                ) : (
                    <NavigateControlPannel
                        product_id={this.state.product.product_id}
                        setChoicePannelStatus={this.props.setChoicePannelStatus}
                    />
                )}
            </div>
        );
    }
}
