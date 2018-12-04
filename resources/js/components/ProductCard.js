import React, { Component } from "react";

import ControlPannel from "./ControlPannel";
import ChoicePannel from "./ChoicePannel";

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        const newMode =
            this.props.product.choices.length === 0 &&
            this.props.product.options.length === 0
                ? 1
                : 2;
        this.state = {
            product: this.props.product,
            quantity: this.props.quantity,
            mode: newMode,
            showChoicePannel: false
        };

        this.setChoicePannelStatus = this.setChoicePannelStatus.bind(this);
    }

    componentDidMount() {
        // console.log(
        //     `${this.state.product.name}`,
        //     this.state.product.choices.length
        // );
        // console.log(`${this.state.product.name}`, newMode);
    }

    setChoicePannelStatus(status) {
        this.setState({ showChoicePannel: status });
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
                        mode={this.state.mode}
                        quantity={this.props.quantity}
                        shoppingCartList={this.props.shoppingCartList}
                        setChoicePannelStatus={this.setChoicePannelStatus}
                    />
                    {this.state.showChoicePannel ? (
                        <ChoicePannel
                            shoppingCartList={this.props.shoppingCartList}
                            updateShopCartList={this.props.updateShopCartList}
                            product={this.props.product}
                            setChoicePannelStatus={this.setChoicePannelStatus}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}
