import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ShopCartButton extends Component {
    constructor(props) {
        super(props);

        this.state = { shopping_cart_list: [], mode: 1 };
        this.setExpand = this.setExpand.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }

    componentDidMount() {
        this.setState({
            shopping_cart_list: this.props.shoppingCartList,
            mode: this.props.mode
        });
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            shopping_cart_list: newProps.shoppingCartList,
            mode: newProps.mode
        });
    }

    getPrice() {
        let totalPrice = 0;
        this.state.shopping_cart_list.map(item => {
            totalPrice += item.quantity * item.price;
        });
        totalPrice = Math.round(totalPrice * 100) / 100;
        return totalPrice;
    }

    setExpand() {
        this.props.setExpand(true);
    }
    render() {
        return (
            <div className="shop-cart-button">
                <div onClick={this.setExpand} className="left">
                    <i className="material-icons">shopping_cart</i>
                    <span className="total-price">${this.getPrice()}</span>
                </div>
                {this.state.mode === 1 ? (
                    <div className="right">
                        <Link to={`/groupbuy/public/confirm`}>
                            {this.props.btn_text}
                        </Link>
                    </div>
                ) : (
                    <div className="right">
                        <Link to={`/groupbuy/public/products`}>
                            {this.props.btn_text}
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}
