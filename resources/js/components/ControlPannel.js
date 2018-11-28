import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ControlPannel extends Component {
    constructor(props) {
        super(props);

        this.state = { sold: 0, quantity: 0, product_id: 0 };
    }

    componentDidMount() {
        this.setState({
            sold: this.props.product_sold,
            quantity: this.props.quantity,
            product_id: this.props.product_id
        });
    }

    render() {
        return (
            <div className="control-pannel">
                <span className="sold">SOLD: {this.state.sold}</span>
                {this.state.quantity > 0 ? (
                    <div>
                        <i className="material-icons">remove</i>
                        <span>{this.state.quantity}</span>
                        <i className="material-icons">add</i>
                    </div>
                ) : (
                    <div>
                        <Link
                            to={`/groupbuy/public/shops/${
                                this.state.product_id
                            }`}
                        >
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}
