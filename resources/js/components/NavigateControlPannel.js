import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigateControlPannel extends Component {
    render() {
        return (
            <Link to={`/groupbuy/public/shops/${this.props.product_id}`}>
                <span className="navigate-control-pannel">选择商铺</span>
            </Link>
        );
    }
}
