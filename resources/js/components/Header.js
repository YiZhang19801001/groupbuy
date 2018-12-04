import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { textClass: "", backgroundClass: "" };
    }
    componentDidMount() {
        this.setState({
            textClass: this.props.textClass,
            backgroundClass: this.props.backgroundClass
        });
    }
    render() {
        return (
            <div className={`page-header ${this.state.backgroundClass}`}>
                <Link to="/groupbuy/public/products">
                    <i className="material-icons">home</i>
                </Link>
                <p className={this.state.textClass}>{this.props.text}</p>
                <i className="material-icons">close</i>
            </div>
        );
    }
}
