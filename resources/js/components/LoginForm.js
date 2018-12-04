import React, { Component } from "react";
import axios from "axios";

export default class LoginFrom extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "", complete: false };
        this.login = this.login.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    login(event) {
        event.preventDefault();
        axios
            .post("/groupbuy/public/api/user/login", {
                password: this.state.password,
                email: this.state.email
            })
            .then(res => {
                if (res.data.success) {
                    localStorage.setItem(
                        "currentToken",
                        res.data.data.auth_token
                    );
                    this.setState({ complete: true });
                } else {
                    alert("登录失败，请检查您的邮箱和密码");
                }
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        if (this.state.complete) {
            return <Redirect to="/groupbuy/public/complete" />;
        }
        return (
            <div className="login-form">
                <form method="post">
                    <div className="form-field">
                        <div className="icon-wrapper">
                            <i className="material-icons">email</i>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="email"
                                value=""
                                placeholder="please enter your email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-field">
                        <div className="icon-wrapper">
                            <i className="material-icons">lock</i>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                name="password"
                                value=""
                                placeholder="please enter your password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </form>
                <div className="btn-wrapper">
                    <div onClick={this.login} className="button">
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}
