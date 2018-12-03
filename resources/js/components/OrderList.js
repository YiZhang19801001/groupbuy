import React, { Component } from "react";

export default class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = { orderList: [] };

        this.getTotal = this.getTotal.bind(this);
    }

    componentDidMount() {
        this.setState({ orderList: this.props.shoppingCartList });
    }

    getTotal() {
        let sum = 0;
        this.state.orderList.map(item => {
            sum += item.price * item.quantity;
        });
        return Math.round(sum * 100) / 100;
    }

    render() {
        return (
            <div className="order-list">
                <div className="header">Order Details</div>
                {this.state.orderList.map((item, index) => {
                    return (
                        <div
                            key={`${item.name}${index}`}
                            className="order-item"
                        >
                            <div className="name-quantity">
                                <span className="name">{item.name}</span>
                                <span className="quantity">
                                    X{item.quantity}
                                </span>
                            </div>
                            <div className="price-wrapper">
                                <span className="price">
                                    $
                                    {Math.round(
                                        item.price * item.quantity * 100
                                    ) / 100}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div className="footer">
                    <span className="total">总计: {this.getTotal()}</span>
                </div>
            </div>
        );
    }
}
