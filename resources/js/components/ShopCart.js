import React, { Component } from "react";

import ShopCartButton from "./ShopCartButton";
import ShoppingCartList from "./ShoppingCartList";
export default class ShopCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            shopping_cart_list: this.props.shoppingCartList,
            mode: this.props.mode,
            btnText: "确认付款"
        };

        this.setExpand = this.setExpand.bind(this);
        this.getBtnText = this.getBtnText.bind(this);
    }
    componentDidMount() {
        this.setState({
            shopping_cart_list: this.props.shoppingCartList,
            mode: this.props.mode,
            paymentMethod: this.props.paymentMethod
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            shopping_cart_list: newProps.shoppingCartList,
            mode: newProps.mode,
            paymentMethod: this.props.paymentMethod
        });
    }
    setExpand(status) {
        this.setState({ expand: status });
    }

    getBtnText() {
        if (this.state.mode === 1) {
            return "确认付款";
        } else {
            return "前往付款";
        }
    }

    render() {
        let shoppingCartList;
        if (this.state.expand) {
            shoppingCartList = (
                <ShoppingCartList
                    updateShopCartList={this.props.updateShopCartList}
                    setExpand={this.setExpand}
                    shoppingCartList={this.props.shoppingCartList}
                />
            );
        } else {
            shoppingCartList = <div />;
        }
        return (
            <div className="shop-cart">
                {shoppingCartList}
                <ShopCartButton
                    shoppingCartList={this.state.shopping_cart_list}
                    setExpand={this.setExpand}
                    btn_text={this.getBtnText()}
                    mode={this.state.mode}
                    paymentMethod={this.state.paymentMethod}
                />
            </div>
        );
    }
}
