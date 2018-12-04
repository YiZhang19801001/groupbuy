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

                <div className="icon-group">
                    <div className="payment-choice">
                        <img src="/groupbuy/public/images/wechat.png" alt="" />
                        <p>
                            <input
                                type="radio"
                                value="credit"
                                name="paymentMethod"
                            />
                            <span>WeChat</span>
                        </p>
                    </div>
                    <div className="payment-choice">
                        <img src="/groupbuy/public/images/paypal.png" alt="" />
                        <p>
                            <input
                                type="radio"
                                value="paypal"
                                name="paymentMethod"
                            />
                            <span>PayPal</span>
                        </p>
                    </div>
                    <div className="payment-choice">
                        <img src="/groupbuy/public/images/credit.png" alt="" />
                        <p>
                            <input
                                type="radio"
                                value="credit"
                                name="paymentMethod"
                            />
                            <span>Credit</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
