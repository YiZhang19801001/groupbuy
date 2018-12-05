import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ShopCartButton extends Component {
    constructor(props) {
        super(props);

        this.state = { shopping_cart_list: [], mode: 1, paymentMethod: "" };
        this.setExpand = this.setExpand.bind(this);
        this.getPriceTotal = this.getPriceTotal.bind(this);
        this.closeOrderList = this.closeOrderList.bind(this);
        this.getQuantityTotal = this.getQuantityTotal.bind(this);
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
            paymentMethod: newProps.paymentMethod
        });
    }

    getPriceTotal() {
        let totalPrice = 0;
        console.log("list: ", this.state.shopping_cart_list);
        this.state.shopping_cart_list.map(item => {
            totalPrice += item.quantity * item.price;
            if (item.options.length > 0) {
                item.options.map(option => {
                    totalPrice += option.price * option.quantity;
                });
            }
        });
        totalPrice = Math.round(totalPrice * 100) / 100;
        return totalPrice;
    }

    setExpand() {
        this.props.setExpand(true);
    }

    closeOrderList() {
        this.props.setExpand(false);
    }

    getQuantityTotal() {
        let totalQuantity = 0;
        this.state.shopping_cart_list.map(item => {
            totalQuantity += item.quantity;
        });

        return totalQuantity;
    }
    render() {
        return (
            <div className="shop-cart-button">
                <div onClick={this.setExpand} className="left">
                    <i className="material-icons">shopping_cart</i>
                    {this.getQuantityTotal() > 0 ? (
                        <span className="badge">{this.getQuantityTotal()}</span>
                    ) : null}
                    <span className="total-price">${this.getPriceTotal()}</span>
                </div>
                <div className="right" onClick={this.closeOrderList}>
                    {this.state.mode === 1 ? (
                        <Link to={`/groupbuy/public/confirm`}>
                            {this.props.btn_text}
                        </Link>
                    ) : (
                        <Link to={`/groupbuy/public/login`}>
                            {this.props.btn_text}
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}
