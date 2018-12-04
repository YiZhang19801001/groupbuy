import React, { Component } from "react";

import Header from "./Header";
import OrderList from "./OrderList";
import ProcessBar from "./ProcessBar";
import PaymentMethod from "./PaymentMethod";
import PickUpAddress from "./PickUpAddress";

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
                <ProcessBar step={2} />
                <PickUpAddress pickupDate={this.props.pickupDate} />
                <PaymentMethod setMethod={this.props.setMethod} />
                <OrderList shoppingCartList={this.props.shoppingCartList} />
            </div>
        );
    }
}
