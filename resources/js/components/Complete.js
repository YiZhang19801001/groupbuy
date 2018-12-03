import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProcessBar from "./ProcessBar";
export default class Complete extends Component {
    render() {
        return (
            <div className="complete">
                <h3>Your Order Is Submitted!</h3>
                <ProcessBar step={4} />
                <div className="icon-wrapper">
                    <Link to="/groupbuy/public/products">
                        <i className="material-icons">done_outline</i>
                    </Link>
                </div>
            </div>
        );
    }
}
