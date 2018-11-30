import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ShopCartButton extends Component {
    constructor(props) {
        super(props);

        this.state = { shopping_cart_list: [] };
        this.setExpand = this.setExpand.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }

    componentDidMount() {
        this.setState({ shopping_cart_list: this.props.shoppingCartList });
    }

    getPrice() {
        let totalPrice = 0;
        this.state.shopping_cart_list.map(item => {
            const price = parseFloat(item.product_price.substring(1));
            totalPrice += item.quantity * price;
        });
        totalPrice = Math.round(totalPrice * 100) / 100;
        return totalPrice;
    }

    setExpand() {
        this.props.setExpand(true);
    }
    render() {
        return (
            <div onClick={this.setExpand} className="shop-cart-button">
                <div className="left">
                    <i className="material-icons">shopping_cart</i>
                    <span className="total-price">${this.getPrice()}</span>
                </div>
                <div className="right">
                    <Link to={`/groupbuy/public/confirm`}>
                        {this.props.btn_text}
                    </Link>
                </div>
            </div>
        );
    }
}
