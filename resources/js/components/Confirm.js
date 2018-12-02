import React, { Component } from "react";

import Header from "./Header";
import PickUpAddress from "./PickUpAddress";
import OrderList from "./OrderList";

export default class Confirm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeMode(2);
    }

    render() {
        return (
            <div className="confirm">
                <Header
                    text="确认订单"
                    textClass="bold"
                    backgroundClass="dark"
                />
                <div style={{ height: "40px" }} />
                <PickUpAddress />
                <OrderList shoppingCartList={this.props.shoppingCartList} />
            </div>
        );
    }
}
