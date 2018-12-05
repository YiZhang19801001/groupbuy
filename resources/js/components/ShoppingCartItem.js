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
                    <span>
                        {this.state.item.name}
                        {this.state.item.choices.length > 0 ? (
                            <div className="sub-choice">
                                {this.state.item.choices.map(
                                    (choice, index) => {
                                        //console.log("choice sub", choice);
                                        return (
                                            <div key={`itemextra${index}`}>
                                                {choice.value}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        ) : null}
                        {this.state.item.options.length > 0 ? (
                            <div className="sub-option">
                                {this.state.item.options.map(
                                    (option, index) => {
                                        //console.log("option sub", option);
                                        return (
                                            <div key={`itemoption${index}`}>
                                                {option.option_value_name}
                                                {"  "}${option.price}X
                                                {option.quantity}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        ) : null}
                    </span>
                </div>
                <div className="item-price-quantity">
                    <span className="item-price">{this.state.item.price}</span>
                    <QuantityControlPannel
                        quantity={this.state.item.quantity}
                        increase={this.increase}
                        decrease={this.decrease}
                        mode={2}
                    />
                </div>
            </div>
        );
    }
}
