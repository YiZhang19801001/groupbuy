import React, { Component } from "react";

import ShopCartButton from "./ShopCartButton";
import ShoppingCartList from "./ShoppingCartList";
export default class ShopCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            shopping_cart_list: this.props.shoppingCartList
        };

        this.setExpand = this.setExpand.bind(this);
    }
    componentDidMount() {
        this.setState({ shopping_cart_list: this.props.shoppingCartList });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ shopping_cart_list: newProps.shoppingCartList });
    }
    setExpand(status) {
        this.setState({ expand: status });
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
                    btn_text={"确认付款"}
                />
            </div>
        );
    }
}
