import React, { Component } from "react";

import Header from "./Header";
import PickUpAddress from "./PickUpAddress";
import OrderList from "./OrderList";

export default class Confirm extends Component {
    render() {
        return (
            <div className="confirm">
                <Header
                    text="确认订单"
                    textClass="bold"
                    backgroundClass="dark"
                />
                <div style={{height:"40px"}}></div>
                <PickUpAddress />
                <OrderList shoppingCartList={this.props.shoppingCartList} />
            </div>
        );
    }
}
