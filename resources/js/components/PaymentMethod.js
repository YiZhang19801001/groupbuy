import React, { Component } from "react";

export default class PaymentMethod extends Component {
    constructor(props) {
        super(props);

        this.setMethod = this.setMethod.bind(this);
    }

    componentDidMount() {}

    setMethod(e) {
        this.props.setMethod(e.target.value);
    }

    render() {
        return (
            <div className="payment-method">
                <div className="header">支付方式</div>
                <div className="mehtods">
                    <input
                        name="payment"
                        type="radio"
                        onClick={this.setMethod}
                        value="Redpayment"
                    />
                    Redpayment
                    <input
                        name="payment"
                        type="radio"
                        onClick={this.setMethod}
                        value="Paypal"
                    />
                    Paypal
                    <input
                        name="payment"
                        type="radio"
                        onClick={this.setMethod}
                        value="Credit"
                    />
                    Credit
                </div>
            </div>
        );
    }
}
