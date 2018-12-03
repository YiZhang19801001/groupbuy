import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProcessBar extends Component {
    render() {
        return (
            <div className="process-bar">
                <div className="line" />
                <Link to="/groupbuy/public/products">
                    <span className="node-wrapper">
                        <div
                            className={`node ${
                                this.props.step === 1 ? "active" : ""
                            }`}
                        >
                            <span
                                className={`node-number ${
                                    this.props.step === 1 ? "active" : ""
                                }`}
                            >
                                1
                            </span>
                        </div>
                    </span>
                    <span
                        className={`node-text ${
                            this.props.step === 1 ? "active" : ""
                        }`}
                    >
                        点餐
                    </span>
                </Link>
                <Link to="/groupbuy/public/confirm">
                    <span className="node-wrapper">
                        <div
                            className={`node ${
                                this.props.step === 2 ? "active" : ""
                            }`}
                        >
                            <span
                                className={`node-number ${
                                    this.props.step === 2 ? "active" : ""
                                }`}
                            >
                                2
                            </span>
                        </div>
                    </span>
                    <span
                        className={`node-text ${
                            this.props.step === 2 ? "active" : ""
                        }`}
                    >
                        选择店面
                    </span>
                </Link>

                <Link to="/groupbuy/public/login">
                    <span className="node-wrapper">
                        <div
                            className={`node ${
                                this.props.step === 3 ? "active" : ""
                            }`}
                        >
                            <span
                                className={`node-number ${
                                    this.props.step === 3 ? "active" : ""
                                }`}
                            >
                                3
                            </span>
                        </div>
                    </span>
                    <span
                        className={`node-text ${
                            this.props.step === 3 ? "active" : ""
                        }`}
                    >
                        登录付款
                    </span>
                </Link>
                <Link to="/groupbuy/public/complete">
                    <span className="node-wrapper">
                        <div
                            className={`node ${
                                this.props.step === 4 ? "active" : ""
                            }`}
                        >
                            <span
                                className={`node-number ${
                                    this.props.step === 4 ? "active" : ""
                                }`}
                            >
                                4
                            </span>
                        </div>
                    </span>
                    <span
                        className={`node-text ${
                            this.props.step === 4 ? "active" : ""
                        }`}
                    >
                        完成订单
                    </span>
                </Link>
            </div>
        );
    }
}
