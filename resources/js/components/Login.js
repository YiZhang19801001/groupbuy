import React, { Component } from "react";

import Header from "./Header";
import ProcessBar from "./ProcessBar";
import LoginForm from "./LoginForm";
import RegisterFrom from "./RegisterForm";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { mode: 1, headerText: "登录" };
    }

    render() {
        return (
            <div className="login">
                <Header
                    text={this.state.headerText}
                    textClass="bold"
                    backgroundClass="dark-lighter"
                />
                <div style={{ height: "40px" }} />
                <ProcessBar step={3} />
                <div className="switch">
                    <div
                        onClick={() => this.setState({ mode: 1 })}
                        className={`switch-button left ${
                            this.state.mode === 1 ? "active" : ""
                        }`}
                    >
                        登录
                    </div>
                    <div
                        onClick={() => this.setState({ mode: 2 })}
                        className={`switch-button right ${
                            this.state.mode === 2 ? "active" : ""
                        }`}
                    >
                        注册
                    </div>
                </div>

                {this.state.mode === 1 ? <LoginForm /> : <RegisterFrom />}
            </div>
        );
    }
}
