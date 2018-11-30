import React, { Component } from "react";
import QuantityControlPannel from "./QuantityControlPannel";

export default class ShoppingCartItem extends Component {
    constructor(props) {
        super(props);

        this.state = { item: this.props.item };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.setState({ item: this.props.item });
    }
    decrease() {
        this.props.decrease(this.props.index);
    }
    increase() {
        this.props.increase(this.props.index);
    }
    render() {
        return (
            <div className="shopping-cart-item">
                <div className="item-name">
                    <span>{this.state.item.product_name}</span>
                </div>
                <div className="item-price-quantity">
                    <span className="item-price">
                        {this.state.item.product_price}
                    </span>
                    <QuantityControlPannel
                        quantity={this.state.item.quantity}
                        increase={this.increase}
                        decrease={this.decrease}
                        mode={2}
                        key={`${this.state.item.product_name}${
                            this.state.item.product_price
                        }${this.props.index}`}
                    />
                </div>
            </div>
        );
    }
}
