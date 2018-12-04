import React, { Component } from "react";

export default class LoginFrom extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "", name: "" };
        this.register = this.register.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    register(event) {
        event.preventDefault();
        axios
            .post("/groupbuy/public/api/user/register", {
                password: this.state.password,
                email: this.state.email,
                name: this.state.name
            })
            .then(res => {
                if (res.data.success) {
                    alert("注册成功，请返回登录");
                } else {
                    alert("注册失败，请检查您的输入");
                }
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="login-form">
                <form method="post">
                    <div className="form-field">
                        <div className="icon-wrapper">
                            <i className="material-icons">account_box</i>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="name"
                                value=""
                                placeholder="please enter your user name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
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
                    <div onClick={this.register} className="button">
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}
