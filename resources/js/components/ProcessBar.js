import React, { Component } from "react";

export default class ProcessBar extends Component {
    render() {
        return (
            <div className="process-bar">
                <div className="line" />
                <div
                    className={`node ${this.props.step === 1 ? "active" : ""}`}
                >
                    <span
                        className={`node-number ${
                            this.props.step === 1 ? "active" : ""
                        }`}
                    >
                        1
                    </span>
                </div>
                <span
                    className={`node-text ${
                        this.props.step === 1 ? "active" : ""
                    }`}
                >
                    点餐
                </span>
                <div
                    className={`node ${this.props.step === 2 ? "active" : ""}`}
                >
                    <span
                        className={`node-number ${
                            this.props.step === 2 ? "active" : ""
                        }`}
                    >
                        2
                    </span>
                </div>
                <span
                    className={`node-text ${
                        this.props.step === 2 ? "active" : ""
                    }`}
                >
                    选择店面
                </span>

                <div
                    className={`node ${this.props.step === 3 ? "active" : ""}`}
                >
                    <span
                        className={`node-number ${
                            this.props.step === 3 ? "active" : ""
                        }`}
                    >
                        3
                    </span>
                </div>
                <span
                    className={`node-text ${
                        this.props.step === 3 ? "active" : ""
                    }`}
                >
                    登录付款
                </span>

                <div
                    className={`node ${this.props.step === 4 ? "active" : ""}`}
                >
                    <span
                        className={`node-number ${
                            this.props.step === 4 ? "active" : ""
                        }`}
                    >
                        4
                    </span>
                </div>
                <span
                    className={`node-text ${
                        this.props.step === 4 ? "active" : ""
                    }`}
                >
                    完成订单
                </span>
            </div>
        );
    }
}
