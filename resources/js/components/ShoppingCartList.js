import React, { Component } from "react";

import ShoppingCartItem from "./ShoppingCartItem";

export default class ShoppingCartList extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [] };

        this.updateShopCartList = this.updateShopCartList.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        this.setState({
            list: this.props.shoppingCartList
        });
    }
    close() {
        this.props.setExpand(false);
    }

    increase(index) {
        this.state.list[index].quantity++;
        this.updateShopCartList(this.state.list);
    }

    decrease(index) {
        if (this.state.list[index].quantity > 1) {
            this.state.list[index].quantity--;
        } else {
            this.state.list.splice(index, 1);
        }
        this.updateShopCartList(this.state.list);
    }
    updateShopCartList(newList) {
        this.props.updateShopCartList(newList);
    }

    render() {
        return (
            <div className="shopping-cart-list">
                <div onClick={this.close} className="header">
                    <span className="header-text">购物车</span>
                    <span>
                        <i className="material-icons">close</i>
                    </span>
                </div>
                <div className="list-container">
                    {this.state.list.map((item, index) => {
                        return (
                            <div>
                                <ShoppingCartItem
                                    key={`cartitem${item.product_id}${
                                        item.image
                                    }`}
                                    index={index}
                                    increase={this.increase}
                                    decrease={this.decrease}
                                    item={item}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
